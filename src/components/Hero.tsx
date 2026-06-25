import type { ComponentType } from "react";
import { portfolio } from "@/data/portfolio";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { RoleCard } from "@/components/RoleCard";
import { WidgetCircle } from "@/components/WidgetCircle";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

const socialIcons: Record<string, ComponentType<{ className?: string }>> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

export function Hero() {
  const { hero } = portfolio;

  return (
    <section
      id="hero"
      className="hero-section"
      aria-labelledby="hero-heading"
    >
      <RevealOnScroll>
        <RoleCard roles={hero.roles} stagger={0} />
        <h1
          id="hero-heading"
          className="font-display text-5xl font-semibold leading-tight tracking-tight text-ink sm:text-6xl lg:text-7xl"
        >
          {hero.name.split(" ")[0]}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          {hero.pitch}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="focus-ring inline-flex items-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-light"
          >
            Get in touch
          </a>
          <a
            href={hero.cvPath}
            download
            className="focus-ring inline-flex items-center rounded-md border border-border bg-surface px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Download CV
          </a>
        </div>

        <div className="mt-8 flex items-center gap-3">
          {hero.social.map((link, index) => {
            const Icon = socialIcons[link.label];
            return (
              <WidgetCircle
                key={link.label}
                href={link.href}
                stagger={portfolio.nav.length + index}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} (opens in new tab)`}
                className="h-10 w-10 text-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                {Icon && <Icon className="h-5 w-5" />}
              </WidgetCircle>
            );
          })}
        </div>

        <div
          className="mt-10 flex items-center gap-2.5"
          role="status"
          aria-label={`Availability: ${hero.availability}`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-status-pulse rounded-full bg-accent opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
          <span className="text-sm text-muted">{hero.availability}</span>
        </div>
      </RevealOnScroll>
    </section>
  );
}
