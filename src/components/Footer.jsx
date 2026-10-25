import { useEffect, useState } from 'react';
import Reveal from './Reveal.jsx';
import { t } from '../i18n.js';

export default function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <Reveal as="footer" variant="reveal-fade">
      <div className="container footer-row">
        <div className="footer-mono">
          © <span>{year}</span> derekin.tech · {t('footer.rights')}
        </div>
        <div className="footer-mono" style={{ color: 'var(--meta)' }}>
          {t('footer.designed')}
        </div>
      </div>
    </Reveal>
  );
}