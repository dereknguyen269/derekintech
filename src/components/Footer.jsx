import { useEffect, useState } from 'react';
import Reveal from './Reveal.jsx';

export default function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <Reveal as="footer" variant="reveal-fade">
      <div className="container footer-row">
        <div className="footer-mono">
          © <span>{year}</span> derekin.tech · All rights reserved.
        </div>
        <div className="footer-mono" style={{ color: 'var(--meta)' }}>
          Designed with Agentic theme
        </div>
      </div>
    </Reveal>
  );
}
