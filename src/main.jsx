import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { initAnalytics } from './analytics.js';
import { LANG } from './i18n.js';

// Keep the document language in sync with the entry that was served.
document.documentElement.lang = LANG;

initAnalytics();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);