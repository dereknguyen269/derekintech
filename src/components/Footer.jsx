import { StarIcon } from "./icons.jsx";
import { t } from "../i18n.js";
export default function Footer() {
  return (
    <>
      <footer className="container">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            d
            <span>
              <StarIcon />
            </span>
          </span>
          <span>
            derek<span className="brand-light">in.tech</span>
          </span>
        </a>
        <span>
          © <span id="year">{new Date().getFullYear()}</span> Derek Nguyen
        </span>
        <a href="#top" className="back-top">
          <span>{t("footer.backToTop")}</span> ↑
        </a>
      </footer>
    </>
  );
}
