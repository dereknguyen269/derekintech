import { useRef, useState } from 'react';
import Reveal from './Reveal.jsx';
import { contactLinks } from './data.jsx';

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ text: '', state: null });

  const onSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSending(true);
    setStatus({ text: '', state: null });

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          form.reset();
          setStatus({ text: 'Thank you! Message sent.', state: 'success' });
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      })
      .catch(() => {
        setStatus({
          text: 'Failed to send. Please email hello@derekin.tech directly.',
          state: 'error',
        });
      })
      .finally(() => setSending(false));
  };

  return (
    <section id="contact">
      <div className="container">
        <Reveal as="div" className="contact-box" variant="reveal-scale">
          <div>
            <span className="eyebrow">Connect</span>
            <h2>Let's build something great</h2>
            <p className="contact-desc">
              Have an interesting project, collaboration idea, or want to discuss AI workflows? Reach out directly.
            </p>
            <div className="contact-links">
              {contactLinks.map(({ href, label, title, icon: Icon, primary }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={primary ? 'btn btn-primary' : 'btn btn-secondary'}
                  aria-label={label}
                  title={title}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <form
            ref={formRef}
            action="https://api.web3forms.com/submit"
            method="POST"
            className="contact-form"
            onSubmit={onSubmit}
            noValidate
          >
            <input type="hidden" name="access_key" value="e3208fba-b8e5-4cba-a504-7d586238621c" />
            <input type="text" name="name" placeholder="Your name" className="form-input" required />
            <input type="email" name="email" placeholder="Your email" className="form-input" required />
            <textarea name="message" placeholder="Your message..." className="form-textarea" required></textarea>
            <button type="submit" className="btn btn-primary" disabled={sending} aria-disabled={sending || undefined}>
              <span className="btn-text">{sending ? 'Sending...' : 'Send Message'}</span>
              {sending && (
                <svg className="btn-spinner" style={{ display: 'inline-block' }} viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="31.4 31.4" />
                </svg>
              )}
            </button>
            <p className="form-status" aria-live="polite" data-state={status.state || undefined}>
              {status.text}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
