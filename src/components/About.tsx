import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function About() {
  const { about } = portfolio;

  return (
    <section id="about" className="py-20 sm:py-28" aria-labelledby="about-heading">
      <RevealOnScroll>
        <SectionHeading title="About" />
        <p
          id="about-heading"
          className="max-w-3xl text-lg leading-relaxed text-muted"
        >
          {about.bio}
        </p>

        <dl className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {about.stats.map((stat, index) => (
            <RevealOnScroll key={stat.label} delay={index * 100}>
              <div className="rounded-lg border border-border bg-surface p-6">
                <dt className="text-sm font-medium text-muted">{stat.label}</dt>
                <dd
                  className={`mt-2 font-display font-semibold text-accent ${
                    stat.value.length > 6
                      ? "text-2xl sm:text-3xl"
                      : "text-4xl"
                  }`}
                >
                  {stat.value}
                </dd>
              </div>
            </RevealOnScroll>
          ))}
        </dl>
      </RevealOnScroll>
    </section>
  );
}
