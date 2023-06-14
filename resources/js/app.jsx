// import './bootstrap';
import '../css/app/app.css';
import '../css/index/index.css';
// import '../css/registerAdmin/generateKey/register.css';
import '../css/companyDashboard/companyDashboard.css';
import '../css/companyMembers/companyMembers.css'
import '../css/userDashboard/dashboard/dashboard.css';
import '../css/layoutDashboard/layoutDashboard.css';
import '../css/wallet/wallet.css';
import '../css/logs/logs.css';
import '../css/rewardsCollection/rewardsCollection.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#FFCD29',
    },
});
