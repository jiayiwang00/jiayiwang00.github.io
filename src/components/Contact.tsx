export function Contact() {
  return (
    <section id="contact" className="w-full border-t border-[#ffffff10] py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="shiny-sec mb-2 text-lg">Let's connect</h2>
        <h3 className="mb-6 text-4xl font-medium text-[var(--white)] md:text-5xl">Contact</h3>
        <div className="rounded-2xl border border-[var(--white-icon-tr)] bg-[#1414149c] p-6 md:p-8">
          <p className="mb-6 max-w-2xl text-[var(--white-icon)]">
            Interested in my projects or want to follow what comes next? Find me on GitHub or send me an email.
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="contact-button" href="https://github.com/jiayiwang00" target="_blank" rel="noopener noreferrer">Visit my GitHub</a>
            <a className="contact-button contact-button--secondary" href="mailto:jiayiwang66@outlook.com">Send an email</a>
          </div>
        </div>
      </div>
    </section>
  );
}
