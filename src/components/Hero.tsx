import { GithubIcon, MailIcon } from "./Icons";
import { LogoWall } from "./LogoWall";

export function Hero() {
  return (
    <section id="home" className="mx-auto max-w-5xl pb-14 pt-20 text-[var(--white)] md:py-36">
      <div className="space-y-8">
        <div className="space-y-4 text-left">
          <p className="shiny-white text-base text-[var(--white-icon)] md:text-lg">Hi, I'm Jiayi Wang</p>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-12">
            <h1 className="text-pretty text-5xl font-medium leading-none md:text-6xl">Software <br /> Developer</h1>
            <p className="text-base text-[var(--white-icon)] md:text-2xl">
              Building playful, interactive web experiences with thoughtful design and{" "}
              <span className="shiny-sec">modern code</span>.
            </p>
          </div>
          <div className="flex justify-start gap-2 pt-3 md:pt-6">
            <a className="icon-button" href="https://github.com/jiayiwang00" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon className="size-8" />
            </a>
            <a className="icon-button" href="mailto:jiayiwang66@outlook.com" aria-label="Email Jiayi Wang" title="jiayiwang66@outlook.com">
              <MailIcon className="size-8" />
            </a>
          </div>
        </div>
        <LogoWall />
      </div>
    </section>
  );
}
