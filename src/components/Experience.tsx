import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function Experience() {
  const { experience } = portfolio;

  return (
    <section
      id="experience"
      className="py-20 sm:py-28"
      aria-labelledby="experience-heading"
    >
      <RevealOnScroll>
        <SectionHeading title="Experience" />
      </RevealOnScroll>

      <ol className="relative border-l border-border pl-8">
        {experience.map((entry, index) => (
          <RevealOnScroll key={`${entry.company}-${entry.dates}`} delay={index * 80}>
            <li className="relative mb-10 last:mb-0">
              {/* Timeline dot */}
              <span
                className="absolute -left-[2.125rem] top-1.5 h-3 w-3 rounded-full border-2 border-surface bg-accent"
                aria-hidden="true"
              />

              <div>
                <h3
                  id={index === 0 ? "experience-heading" : undefined}
                  className="font-display text-lg font-semibold text-ink"
                >
                  {entry.title}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {entry.company}
                  <span aria-hidden="true"> · </span>
                  <time>{entry.dates}</time>
                </p>
                <ul className="mt-3 space-y-2">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-border"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </RevealOnScroll>
        ))}
      </ol>
    </section>
  );
}
