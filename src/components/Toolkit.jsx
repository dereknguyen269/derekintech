import { t } from "../i18n.js";
export default function Toolkit() {
  return (
    <>
      <div className="stack-strip">
        <div className="container stack-inner">
          <span className="eyebrow">{t("stack.heading")}</span>
          <div className="stack-items">
            <span>
              <b className="ts-logo">TS</b> TypeScript
            </span>
            <span>
              <b className="react-logo">
                <svg
                  width="24"
                  height="24"
                  viewBox="-12 -12 24 24"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <ellipse rx="11" ry="4"></ellipse>
                  <ellipse rx="11" ry="4" transform="rotate(60)"></ellipse>
                  <ellipse rx="11" ry="4" transform="rotate(120)"></ellipse>
                  <circle r="1.5" fill="currentColor" stroke="none"></circle>
                </svg>
              </b>{" "}
              React / Next.js
            </span>
            <span>
              <b className="go-logo">Go</b> Go
            </span>
            <span>
              <b className="python-logo">Py</b> Python
            </span>
            <span>
              <b className="db-logo">▤</b> PostgreSQL
            </span>
            <span>
              <b className="docker-logo">▦</b> Docker
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
