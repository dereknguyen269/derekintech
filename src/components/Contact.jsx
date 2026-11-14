import { ArrowIcon } from "./icons.jsx";
import { t } from "../i18n.js";
import { useEffect, useRef, useState } from "react";
export default function Contact() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({
    text: "",
    error: false,
  });
  const [copied, setCopied] = useState("");
  const copyTimer = useRef(null);
  const request = useRef(null);
  useEffect(
    () => () => {
      clearTimeout(copyTimer.current);
      request.current?.abort();
    },
    [],
  );
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hello@derekin.tech");
      setCopied(t("contact.copied"));
    } catch {
      setCopied(t("contact.copyFallback"));
    }
    clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(""), 3500);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (sending || !form.reportValidity()) return;
    setSending(true);
    setStatus({
      text: "",
      error: false,
    });
    const controller = new AbortController();
    request.current = controller;
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("Unable to send");
      form.reset();
      setStatus({
        text: t("contact.thanks"),
        error: false,
      });
    } catch {
      setStatus({
        text: t("contact.fail"),
        error: true,
      });
    } finally {
      clearTimeout(timeout);
      request.current = null;
      setSending(false);
    }
  };
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="container contact-grid">
          <div>
            <div className="eyebrow section-kicker">
              <span>04 /</span>
              <span>{t("contact.eyebrow")}</span>
            </div>

            <h2>
              <span>{t("contact.title")}</span>
              <br />
              <em>{t("contact.titleAccent")}</em>
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
            </h2>

            <p>{t("contact.intro")}</p>

            <div className="email-row">
              <a href="mailto:hello@derekin.tech">hello@derekin.tech</a>
              <button
                id="copy-email"
                aria-label={t("contact.copy")}
                type="button"
                onClick={copyEmail}
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <rect x="8" y="8" width="12" height="12" rx="2"></rect>
                  <path d="M16 8V4H4v12h4"></path>
                </svg>
              </button>
              <span id="copy-status" role="status">
                {copied}
              </span>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/dereknguyen269"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <ArrowIcon />
              </a>
              <a
                href="https://x.com/derek_in_tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                X / Twitter <ArrowIcon />
              </a>
              <a
                href="https://helloderek.substack.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Substack <ArrowIcon />
              </a>
              <a
                href="https://www.tiktok.com/@ezbackend"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok <ArrowIcon />
              </a>
            </div>
          </div>

          <form
            id="contact-form"
            action="https://api.web3forms.com/submit"
            method="post"
            onSubmit={onSubmit}
            aria-busy={sending}
          >
            <input
              type="hidden"
              name="access_key"
              value="e3208fba-b8e5-4cba-a504-7d586238621c"
              readOnly
            />
            <input type="checkbox" name="botcheck" hidden tabIndex="-1" />
            <div className="form-row">
              <div>
                <label htmlFor="name">{t("contact.name")}</label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder={t("contact.namePlaceholder")}
                />
              </div>

              <div>
                <label htmlFor="email">{t("contact.email")}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder={t("contact.emailPlaceholder")}
                />
              </div>
            </div>

            <label htmlFor="message">{t("contact.message")}</label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              placeholder={t("contact.messagePlaceholder")}
            ></textarea>
            <button className="button primary" type="submit" disabled={sending}>
              <span>{t(sending ? "contact.sending" : "contact.send")}</span>
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
            </button>
            <p
              id="form-status"
              role="status"
              className={status.error ? "error" : undefined}
            >
              {status.text}
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
