import '../css/app.css';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

const appName = 'Refreva';

createInertiaApp({
    title: (title) => title ? `${title} | ${appName} Therapy Virginia` : `${appName} — Therapy & Counseling Practice in Virginia`,
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true });
        const page = pages[`./Pages/${name}.tsx`];
        if (!page) {
            throw new Error(`Inertia page not found: ./Pages/${name}.tsx`);
        }
        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#264640',
        showSpinner: true,
    },
});
