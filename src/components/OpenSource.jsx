import { ArrowIcon, StarIcon } from "./icons.jsx";
import { t } from "../i18n.js";
export default function OpenSource() {
  return (
    <>
      <section className="open-section" id="opensource">
        <span id="projects" className="anchor-alias" aria-hidden="true"></span>
        <div className="container">
          <div className="section-title">
            <div>
              <div className="eyebrow section-kicker">
                <span>02 /</span>
                <span>{t("opensource.eyebrow")}</span>
              </div>

              <h2>{t("opensource.title")}</h2>
            </div>
            <a
              className="text-link"
              href="https://github.com/dereknguyen269"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t("opensource.github")}</span>
              <span>
                <ArrowIcon />
              </span>
            </a>
          </div>

          <div className="repo-list">
            <a
              className="repo"
              href="https://github.com/dereknguyen269/AI-Powered-Coding-Tools"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="repo-icon">
                <StarIcon />
              </span>
              <div>
                <h3>AI-Powered-Coding-Tools</h3>

                <p>{t("opensource.aiDescription")}</p>
              </div>
              <span className="repo-tag">AI / LLM</span>
              <span className="repo-arrow">
                <ArrowIcon />
              </span>
            </a>
            <a
              className="repo"
              href="https://github.com/dereknguyen269/programing-best-practices"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="repo-icon">⌘</span>
              <div>
                <h3>programing-best-practices</h3>

                <p>{t("opensource.practicesDescription")}</p>
              </div>
              <span className="repo-tag">{t("opensource.engineering")}</span>
              <span className="repo-arrow">
                <ArrowIcon />
              </span>
            </a>
            <a
              className="repo"
              href="https://github.com/dereknguyen269/derek-power"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="repo-icon">&gt;_</span>
              <div>
                <h3>derek-power</h3>

                <p>{t("opensource.powerDescription")}</p>
              </div>
              <span className="repo-tag">DOTFILES</span>
              <span className="repo-arrow">
                <ArrowIcon />
              </span>
            </a>
            <a
              className="repo"
              href="https://github.com/dereknguyen269/free-services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="repo-icon">
                <ArrowIcon />
              </span>
              <div>
                <h3>free-services</h3>

                <p>{t("opensource.freeDescription")}</p>
              </div>
              <span className="repo-tag">{t("opensource.resources")}</span>
              <span className="repo-arrow">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
