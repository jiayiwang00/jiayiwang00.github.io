import { ArrowIcon, CodeIcon } from "./Icons";
import { projects } from "../data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="border-t border-[#ffffff10] py-12 text-[var(--white)]">
      <div className="mx-auto max-w-5xl">
        <h2 className="shiny-sec mb-2 text-lg">My work</h2>
        <h3 className="mb-8 text-4xl font-medium md:text-5xl">Projects</h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article className="group" key={project.title}>
              <a href={project.preview} target="_blank" rel="noopener noreferrer" className="block">
                <div className="mb-4 overflow-hidden rounded-2xl bg-[#141414] shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <img src={project.image} alt={`${project.title} gameplay`} className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105 md:h-72" loading="lazy" />
                </div>
              </a>
              <div className="flex items-center gap-3 px-3">
                <div className="flex-grow">
                  <h4 className="text-2xl font-semibold">{project.title}</h4>
                  <span className="py-1 text-sm text-[var(--white-icon)]">{project.status}</span>
                </div>
                <a className="project-button" href={project.source} target="_blank" rel="noopener noreferrer" aria-label="View source on GitHub">
                  <CodeIcon className="size-7" />
                </a>
                <a className="project-button" href={project.preview} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}>
                  <ArrowIcon className="size-7" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <a className="more-projects" href="https://github.com/jiayiwang00?tab=repositories" target="_blank" rel="noopener noreferrer">
          More projects on GitHub
        </a>
      </div>
    </section>
  );
}
