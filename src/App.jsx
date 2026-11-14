import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Toolkit from "./components/Toolkit.jsx";
import Work from "./components/Work.jsx";
import OpenSource from "./components/OpenSource.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  useEffect(() => {
    const links = document.querySelectorAll(".desktop-nav a");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            links.forEach((link) => {
              const active = link.hash === `#${entry.target.id}`;
              link.classList.toggle("current", active);
              if (active) link.setAttribute("aria-current", "location");
              else link.removeAttribute("aria-current");
            });
        });
      },
      { rootMargin: "-15% 0px -60% 0px" },
    );
    ["work", "opensource", "about", "contact"].forEach((id) =>
      observer.observe(document.getElementById(id)),
    );
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Toolkit />
        <Work />
        <OpenSource />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
