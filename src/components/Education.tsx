import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function Education() {
  const { education } = portfolio;

  return (
    <section
      id="education"
      className="py-20 sm:py-28"
      aria-labelledby="education-heading"
    >
      <RevealOnScroll>
        <SectionHeading title="Education" />
      </RevealOnScroll>

      <div className="space-y-6">
        {education.map((entry, index) => (
          <RevealOnScroll key={entry.degree} delay={index * 80}>
            <article className="rounded-lg border border-border bg-surface p-6">
              <h3
                id={index === 0 ? "education-heading" : undefined}
                className="font-display text-lg font-semibold text-ink"
              >
                {entry.degree}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {entry.school}
                <span aria-hidden="true"> · </span>
                {entry.location}
              </p>
              <p className="mt-1 text-sm text-muted">
                <time>{entry.dates}</time>
              </p>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
