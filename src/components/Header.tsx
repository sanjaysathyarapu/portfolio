"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { portfolio } from "@/data/portfolio";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { WidgetCircle } from "@/components/WidgetCircle";
import { useScrolled } from "@/hooks/useScrolled";

const SECTION_IDS = portfolio.nav.map((link) => link.href.replace("#", ""));

export function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const scrolled = useScrolled(24);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      menuRef.current?.querySelector("a")?.focus();
    }
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const navLinkClass = (href: string) => {
    const id = href.replace("#", "");
    const isActive = activeSection === id;
    return `widget-circle-nav px-3 py-1.5 text-sm font-medium transition-colors ${
      isActive ? "text-accent" : "text-muted hover:text-ink"
    }`;
  };

  const showSolidHeader = scrolled || menuOpen;

  return (
    <header
      className="site-header fixed inset-x-0 top-0 z-50 bg-transparent"
      data-scrolled={showSolidHeader}
    >
      <div className="mx-auto max-w-6xl px-5 py-4 sm:px-8 sm:py-5">
        <div className="flex items-center justify-between gap-6">
          <a
            href="#hero"
            className="focus-ring shrink-0 rounded font-display text-lg font-semibold tracking-tight text-ink"
          >
            {portfolio.hero.name.split(" ")[0]}
          </a>

          <div className="flex items-center gap-3 lg:gap-4">
            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex flex-wrap items-center justify-end gap-1.5 lg:gap-2">
                {portfolio.nav.map((link, index) => (
                  <li key={link.href}>
                    <WidgetCircle
                      href={link.href}
                      stagger={index}
                      className={navLinkClass(link.href)}
                    >
                      {link.label}
                    </WidgetCircle>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex shrink-0 items-center gap-3">
              <ThemeToggle />

              <button
                type="button"
                className="focus-ring rounded p-2 text-ink md:hidden"
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                {menuOpen ? (
                  <CloseIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          ref={menuRef}
          id="mobile-nav"
          className="border-t border-border/10 bg-canvas/70 backdrop-blur-md md:hidden"
        >
          <nav aria-label="Primary mobile">
            <ul className="flex flex-col gap-2 px-5 py-4">
              {portfolio.nav.map((link, index) => (
                <li key={link.href}>
                  <WidgetCircle
                    href={link.href}
                    stagger={index}
                    className={`${navLinkClass(link.href)} block w-fit py-2`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </WidgetCircle>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
