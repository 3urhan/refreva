import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting map (IP -> timestamps)
const rateLimitMap = new Map<string, number[]>();

export async function POST(request: NextRequest) {
  try {
    // 1. IP-based rate limiting: max 5 submissions per 10 minutes per IP
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
    const now = Date.now();
    const windowMs = 10 * 60 * 1000;
    const timestamps = rateLimitMap.get(ip) || [];
    const recent = timestamps.filter((t) => now - t < windowMs);

    if (recent.length >= 5) {
      return NextResponse.json(
        {
          message: "Too many requests. For immediate assistance, please contact our office directly.",
        },
        { status: 429 }
      );
    }

    rateLimitMap.set(ip, [...recent, now]);

    // 2. Parse & Validate body
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      clientStatus,
      sessionPreference,
      preferredTime,
      preferredContactMethod,
      generalInquiry,
      honeypot,
    } = body;

    // 3. Honeypot check: automated bots fill this
    if (honeypot && String(honeypot).trim().length > 0) {
      // Discard bot silently
      return NextResponse.json({ success: true, message: "Request received." });
    }

    // 4. Required fields check
    if (!fullName || typeof fullName !== "string" || fullName.trim().length === 0) {
      return NextResponse.json(
        { message: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { message: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      return NextResponse.json(
        { message: "A valid phone number is required." },
        { status: 400 }
      );
    }

    // 5. Length limits to prevent payload abuse
    if (fullName.length > 100 || email.length > 120 || phone.length > 30) {
      return NextResponse.json(
        { message: "Input exceeds allowed character length." },
        { status: 400 }
      );
    }

    const sanitizedInquiry = typeof generalInquiry === "string"
      ? generalInquiry.slice(0, 1000).replace(/[<>]/g, "")
      : "";

    // 6. In a production environment with verified email transport / EHR webhook:
    // Here we would securely dispatch the notification to Refreva's encrypted clinic intake email or EHR portal.
    // Notice: We strictly DO NOT log PII to server console to protect prospective client confidentiality.

    return NextResponse.json(
      {
        success: true,
        message: "Your appointment request has been securely received.",
      },
      { status: 200 }
    );
  } catch (error) {
    // Return generic error without leaking server stack trace
    return NextResponse.json(
      {
        message: "An error occurred while processing your request. Please contact the practice directly.",
      },
      { status: 500 }
    );
  }
}
