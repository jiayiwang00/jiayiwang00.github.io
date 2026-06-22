export function Footer() {
  return (
    <footer className="w-full border-t border-[#ffffff10] py-12">
      <div className="mx-auto max-w-5xl space-y-5 text-center">
        <div className="flex justify-center gap-5 text-[var(--white-icon)]">
          <a href="https://github.com/jiayiwang00" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--white)]">GitHub</a>
          <a href="https://jiayiwang00.github.io/Flappy-Bird/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--white)]">Play Flappy Bird</a>
        </div>
        <p className="text-sm text-[var(--white-icon)]">Built with React, TypeScript and Tailwind CSS · Deployed on GitHub Pages</p>
        <p className="text-xs text-[var(--white-icon)] opacity-70">
          © {new Date().getFullYear()} Jiayi Wang · Template ©{" "}
          <a className="underline hover:text-[var(--white)]" href="https://github.com/Gothsec">Oscar Hernandez</a>
        </p>
      </div>
    </footer>
  );
}
