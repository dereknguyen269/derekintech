import { ArrowIcon, StarIcon } from "./icons.jsx";
import { t } from "../i18n.js";
export default function Hero() {
  return (
    <>
      <section className="hero container" id="top">
        <div className="hero-copy">
          <div className="eyebrow availability">
            <span className="status-dot"></span>
            <span>{t("hero.eyebrow")}</span>
          </div>

          <h1>
            <span>{t("hero.titleOpening")}</span>
            <br />
            <span>{t("hero.titleMiddle")}</span>
            <br />
            <em>{t("hero.titleAccent")}</em>
            <span className="heading-star" aria-hidden="true">
              <StarIcon />
            </span>
          </h1>

          <p className="hero-intro">
            <span>{t("hero.introName")}</span> <span>{t("hero.intro")}</span>
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#work">
              <span>{t("hero.explore")}</span>
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
            <a
              className="text-link"
              href="https://github.com/dereknguyen269"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub{" "}
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
          </div>

          <div className="hero-location">
            <span aria-hidden="true">◎</span> <span>{t("hero.location")}</span>
            <span className="small-line"></span>
            <span>{t("hero.locationNote")}</span>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="art-top">
            <span className="mono">{t("hero.deskTitle")}</span>
            <span aria-hidden="true">
              <ArrowIcon />
            </span>
          </div>

          <div className="art-grid">
            <div className="workspace">
              <div className="window-bar">
                <span className="window-dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span>ideas → things that work</span>
                <span>⌘</span>
              </div>

              <div className="workspace-content">
                <div className="code-label">
                  <span className="tiny-square"></span> builder.ts{" "}
                  <span>TS</span>
                </div>

                <div className="code-lines">
                  <div>
                    <b>01</b>
                    <span className="comment">// A simple philosophy</span>
                  </div>

                  <div>
                    <b>02</b>
                    <span>
                      <span className="code-purple">const</span> build = (
                      <span className="code-orange">idea</span>){" "}
                      <span className="code-purple">=&gt;</span> &#123;
                    </span>
                  </div>

                  <div>
                    <b>03</b>
                    <span>  understand(idea);</span>
                  </div>

                  <div>
                    <b>04</b>
                    <span>  makeItUseful();</span>
                  </div>

                  <div>
                    <b>05</b>
                    <span>
                        <span className="code-purple">return</span> ship();
                    </span>
                  </div>

                  <div>
                    <b>06</b>
                    <span>
                      &#125;;<span className="cursor"></span>
                    </span>
                  </div>
                </div>

                <div className="code-bottom">
                  <span>
                    <i></i> thoughtful by design
                  </span>
                  <span>UTF-8</span>
                </div>
              </div>
            </div>

            <div className="art-flow" aria-hidden="true">
              <span className="node">&lt;/&gt;</span>
              <span className="connector"></span>
              <span className="flow-center">
                <StarIcon />
              </span>
              <span className="connector"></span>
              <span className="node">
                <ArrowIcon />
              </span>
            </div>

            <div className="art-tags">
              <span>Human ideas</span>
              <span>Useful software</span>
            </div>

            <div className="desk-note">
              <span className="note-star" aria-hidden="true">
                ✧
              </span>
              <span>{t("hero.deskNote")}</span>
              <span className="note-arrow" aria-hidden="true">
                <ArrowIcon />
              </span>
            </div>
          </div>

          <div className="art-bottom">
            <div className="avatar-stack">
              <img
                src="/assets/derek.jpg"
                alt="Derek Nguyen"
                width="34"
                height="34"
              />
              <span>
                <strong>Derek Nguyen</strong>
                <small>{t("hero.caption")}</small>
              </span>
            </div>
            <span className="signature" aria-hidden="true">
              Derek.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
