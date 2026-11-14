import { ArrowIcon, StarIcon } from "./icons.jsx";
import { t } from "../i18n.js";
export default function About() {
  return (
    <>
      <section className="section container about-section" id="about">
        <div className="about-side">
          <div className="eyebrow section-kicker">
            <span>03 /</span>
            <span>{t("about.eyebrow")}</span>
          </div>

          <div className="portrait-wrap">
            <img
              src="/assets/derek.jpg"
              alt="Derek Nguyen outdoors"
              width="300"
              height="300"
              loading="lazy"
            />
            <span className="portrait-caption">
              Derek, <span>{t("about.caption")}</span>
            </span>
            <span className="portrait-star" aria-hidden="true">
              <StarIcon />
            </span>
          </div>
        </div>

        <div className="about-copy">
          <h2>
            <span>{t("about.title")}</span>
            <br />
            <em>{t("about.titleAccent")}</em>
          </h2>

          <p>{t("about.intro")}</p>

          <p>{t("about.focus")}</p>

          <div className="expertise" id="skills">
            <div>
              <span className="eyebrow">{t("about.frontend")}</span>
              <p>
                TypeScript · React · Next.js
                <br />
                Go · Node.js · Python
              </p>
            </div>

            <div>
              <span className="eyebrow">{t("about.backend")}</span>
              <p>
                PostgreSQL · Redis · Docker
                <br />
                Cloud · AI / LLM workflows
              </p>
            </div>
          </div>
          <a
            className="text-link"
            href="https://helloderek.substack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{t("about.notes")}</span>
            <span>
              <ArrowIcon />
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
