import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://refreva.com";
  const currentDate = new Date();

  const routes = [
    "",
    "/about",
    "/services",
    "/services/psychiatric-evaluations",
    "/services/medication-management",
    "/services/supportive-counseling",
    "/services/individual-therapy",
    "/services/telehealth",
    "/faq",
    "/contact",
    "/schedule",
    "/privacy",
    "/terms",
    "/accessibility",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") || route === "/schedule" ? 0.8 : 0.6,
  }));
}
