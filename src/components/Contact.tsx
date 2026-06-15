import type { ComponentType } from "react";
import { portfolio } from "@/data/portfolio";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

const socialIcons: Record<string, ComponentType<{ className?: string }>> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

export function Contact() {
  const { contact } = portfolio;
  const footerText = contact.footerText.replace(
    "{year}",
    new Date().getFullYear().toString()
  );
  const phoneHref = `tel:${contact.phone.replace(/\D/g, "")}`;

  return (
    <section
      id="contact"
      className="py-20 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="contact-heading"
            className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            {contact.heading}
          </h2>
          <p className="mt-4 text-lg text-muted">{contact.subheading}</p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="focus-ring font-display text-2xl font-medium text-accent transition-colors hover:text-accent-light sm:text-3xl"
            >
              {contact.email}
            </a>
            <a
              href={phoneHref}
              className="focus-ring text-lg text-muted transition-colors hover:text-accent"
            >
              {contact.phone}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            {contact.social.map((link) => {
              const Icon = socialIcons[link.label];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded p-2 text-muted transition-colors hover:text-accent"
                  aria-label={`${link.label} (opens in new tab)`}
                >
                  {Icon && <Icon className="h-6 w-6" />}
                </a>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>

      <footer className="mt-20 border-t border-border pt-8 text-center">
        <p className="text-sm text-muted">{footerText}</p>
      </footer>
    </section>
  );
}
