import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function Skills() {
  const { skills } = portfolio;

  return (
    <section id="skills" className="py-20 sm:py-28" aria-labelledby="skills-heading">
      <RevealOnScroll>
        <SectionHeading title="Skills" />
      </RevealOnScroll>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {skills.map((group, index) => (
          <RevealOnScroll key={group.category} delay={index * 60}>
            <div>
              <h3
                id={index === 0 ? "skills-heading" : undefined}
                className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent"
              >
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-ink"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
