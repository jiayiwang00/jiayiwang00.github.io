import { useEffect, useState } from "react";
import { FolderIcon, HomeIcon, SendIcon } from "./Icons";

const items = [
  { label: "Home", href: "#home", Icon: HomeIcon },
  { label: "Projects", href: "#projects", Icon: FolderIcon },
  { label: "Contact", href: "#contact", Icon: SendIcon },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(() => window.location.hash.slice(1) || "home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    const visibleSections = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        const mostVisible = [...visibleSections.entries()].sort((a, b) => b[1] - a[1])[0];
        if (mostVisible) setActive(mostVisible[0]);
      },
      { rootMargin: "-20% 0px -45%", threshold: [0.1, 0.25, 0.5, 0.75] },
    );

    document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (window.location.hash) {
      requestAnimationFrame(() => {
        document.querySelector(window.location.hash)?.scrollIntoView();
      });
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav className={`portfolio-nav ${scrolled ? "portfolio-nav--scrolled" : ""}`} aria-label="Portfolio navigation">
      <ul>
        {items.map(({ label, href, Icon }) => (
          <li key={href}>
            <a
              className={active === href.slice(1) ? "active" : ""}
              href={href}
            >
              <span className="nav-dot" />
              <Icon className="nav-icon" />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
