import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ExternalLinkIcon } from "@/components/icons";

function hasUrl(url?: string): url is string {
  return Boolean(url && url !== "#");
}

export function Projects() {
  const { projects } = portfolio;

  return (
    <section
      id="projects"
      className="py-20 sm:py-28"
      aria-labelledby="projects-heading"
    >
      <RevealOnScroll>
        <SectionHeading
          title="Projects"
          subtitle="Personal builds and production work — each with a measurable outcome."
        />
      </RevealOnScroll>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project, index) => {
          const showLive = hasUrl(project.liveUrl);
          const showCode = hasUrl(project.codeUrl);
          const showLinks = showLive || showCode;

          return (
            <RevealOnScroll key={project.title} delay={index * 80}>
              <article className="group flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <h3
                  id={index === 0 ? "projects-heading" : undefined}
                  className="font-display text-xl font-semibold text-ink"
                >
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label={`${project.title} tech stack`}
                >
                  {project.techStack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {(showLinks || project.note) && (
                  <div className="mt-6 border-t border-border pt-5">
                    {showLinks && (
                      <div className="flex items-center gap-5">
                        {showLive && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-light"
                          >
                            Live
                            <ExternalLinkIcon className="h-3.5 w-3.5" />
                            <span className="sr-only"> (opens in new tab)</span>
                          </a>
                        )}
                        {showCode && (
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
                          >
                            Code
                            <ExternalLinkIcon className="h-3.5 w-3.5" />
                            <span className="sr-only"> (opens in new tab)</span>
                          </a>
                        )}
                      </div>
                    )}
                    {project.note && (
                      <p
                        className={`text-xs italic text-muted ${showLinks ? "mt-3" : ""}`}
                      >
                        {project.note}
                      </p>
                    )}
                  </div>
                )}
              </article>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
