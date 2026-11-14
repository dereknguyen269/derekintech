import { ArrowIcon } from "./icons.jsx";
import { t } from "../i18n.js";
import { useState } from "react";
export default function Work() {
  const [filter, setFilter] = useState("all");
  return (
    <>
      <section className="section container" id="work">
        <span id="apps" className="anchor-alias" aria-hidden="true"></span>
        <div className="section-title">
          <div>
            <div className="eyebrow section-kicker">
              <span>01 /</span>
              <span>{t("work.eyebrow")}</span>
            </div>

            <h2>{t("work.title")}</h2>
          </div>

          <p>{t("work.intro")}</p>
        </div>

        <div className="work-toolbar">
          <div className="filters" role="group" aria-label="Filter projects">
            <button
              className={`filter${filter === "all" ? " active" : ""}`}
              data-filter="all"
              aria-pressed={filter === "all"}
              onClick={() => setFilter("all")}
            >
              <span>{t("work.all")}</span>
              <small>04</small>
            </button>
            <button
              className={`filter${filter === "web" ? " active" : ""}`}
              data-filter="web"
              aria-pressed={filter === "web"}
              onClick={() => setFilter("web")}
            >
              {t("work.web")}
            </button>
            <button
              className={`filter${filter === "extension" ? " active" : ""}`}
              data-filter="extension"
              aria-pressed={filter === "extension"}
              onClick={() => setFilter("extension")}
            >
              {t("work.extension")}
            </button>
          </div>
          <span
            className="work-count mono"
            aria-live="polite"
          >{`${filter === "all" ? 4 : 2} ${t("work.count")}`}</span>
        </div>

        <div className="project-grid">
          <article
            className="project"
            data-category="web"
            hidden={filter !== "all" && filter !== "web"}
          >
            <a
              className="project-image toolover"
              href="https://thetoolover.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit thetoolover.com"
            >
              <div className="image-top">
                <span>WEB APPLICATION</span>
                <span className="image-arrow">
                  <ArrowIcon />
                </span>
              </div>

              <div className="browser-frame">
                <div className="browser-address">
                  <span>● ● ●</span>
                  <span>thetoolover.com</span>
                  <span>
                    <ArrowIcon />
                  </span>
                </div>
                <img
                  src="/assets/thetoolover.png"
                  alt="Thetoolover developer tools homepage"
                  width="1300"
                  height="799"
                  loading="lazy"
                />
              </div>
              <span className="image-caption">
                Less busywork. More building.
              </span>
            </a>
            <div className="project-meta">
              <div>
                <h3>
                  <a
                    href="https://thetoolover.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Thetoolover{" "}
                    <span>
                      <ArrowIcon />
                    </span>
                  </a>
                </h3>

                <p>{t("work.tooloverDescription")}</p>
              </div>
              <span className="pill">{t("work.tooloverTag")}</span>
            </div>
          </article>

          <article
            className="project"
            data-category="extension"
            hidden={filter !== "all" && filter !== "extension"}
          >
            <a
              className="project-image marklens"
              href="https://chromewebstore.google.com/detail/fphbhjcdilnnjgefioifeecgdpgapmmp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View MarkLens in the Chrome Web Store"
            >
              <div className="image-top">
                <span>CHROME EXTENSION</span>
                <span className="image-arrow">
                  <ArrowIcon />
                </span>
              </div>

              <div className="marklens-composition">
                <div className="markdown-code">
                  <span>README.md</span>
                  <p>
                    <b># Make it clear.</b>
                    <br />
                    <br />
                    Write. Preview. Share.
                    <br />
                    <br />
                    <i>
                      - [x] Instant rendering
                      <br />- [x] Offline first
                      <br />- [x] Your flow
                    </i>
                  </p>
                </div>

                <div className="markdown-preview">
                  <div className="md-icon">
                    M<span>↙</span>
                  </div>
                  <strong>MarkLens</strong>
                  <span>Markdown, beautifully.</span>
                  <div className="md-lines">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <small>Clean Markdown. Anywhere.</small>
                </div>
              </div>
            </a>
            <div className="project-meta">
              <div>
                <h3>
                  <a
                    href="https://chromewebstore.google.com/detail/fphbhjcdilnnjgefioifeecgdpgapmmp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MarkLens{" "}
                    <span>
                      <ArrowIcon />
                    </span>
                  </a>
                </h3>

                <p>{t("work.marklensDescription")}</p>
              </div>
              <span className="pill">Offline first</span>
            </div>
          </article>

          <article
            className="project"
            data-category="web"
            hidden={filter !== "all" && filter !== "web"}
          >
            <a
              className="project-image sheetback"
              href="https://sheetback.top"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit sheetback.top"
            >
              <div className="image-top">
                <span>WEB APPLICATION</span>
                <span className="image-arrow">
                  <ArrowIcon />
                </span>
              </div>

              <div className="browser-frame">
                <div className="browser-address">
                  <span>● ● ●</span>
                  <span>sheetback.top</span>
                  <span>
                    <ArrowIcon />
                  </span>
                </div>
                <img
                  src="/assets/sheetback.png"
                  alt="Sheetback spreadsheet utilities homepage"
                  width="1298"
                  height="830"
                  loading="lazy"
                />
              </div>
              <span className="image-caption">Your data. Your browser.</span>
            </a>
            <div className="project-meta">
              <div>
                <h3>
                  <a
                    href="https://sheetback.top"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sheetback{" "}
                    <span>
                      <ArrowIcon />
                    </span>
                  </a>
                </h3>

                <p>{t("work.sheetbackDescription")}</p>
              </div>
              <span className="pill">{t("work.sheetbackTag")}</span>
            </div>
          </article>

          <article
            className="project"
            data-category="extension"
            hidden={filter !== "all" && filter !== "extension"}
          >
            <a
              className="project-image soundpilot"
              href="https://chromewebstore.google.com/detail/gedkelfdgmnhjgkjhkbcndjlpoafpkcp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Sound Pilot in the Chrome Web Store"
            >
              <div className="image-top">
                <span>CHROME EXTENSION</span>
                <span className="image-arrow">
                  <ArrowIcon />
                </span>
              </div>

              <div className="sound-composition">
                <span className="sound-orbit orbit-one"></span>
                <span className="sound-orbit orbit-two"></span>
                <div className="sound-ui">
                  <div className="sound-title">
                    <span className="sound-symbol">≋</span>
                    <strong>Sound Pilot</strong>
                    <span>•••</span>
                  </div>

                  <div className="waveform" aria-hidden="true">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>

                  <div className="sound-volume">
                    <span>BOOST YOUR AUDIO</span>
                    <strong>
                      200<span>%</span>
                    </strong>
                  </div>

                  <div className="sound-slider">
                    <i></i>
                  </div>

                  <div className="sound-focus">
                    <span>◉   Focus mode</span>
                    <span className="switch-visual"></span>
                  </div>
                </div>
                <span className="sound-caption">Find your focus.</span>
              </div>
            </a>
            <div className="project-meta">
              <div>
                <h3>
                  <a
                    href="https://chromewebstore.google.com/detail/gedkelfdgmnhjgkjhkbcndjlpoafpkcp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sound Pilot{" "}
                    <span>
                      <ArrowIcon />
                    </span>
                  </a>
                </h3>

                <p>{t("work.soundDescription")}</p>
              </div>
              <span className="pill">{t("work.soundTag")}</span>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
