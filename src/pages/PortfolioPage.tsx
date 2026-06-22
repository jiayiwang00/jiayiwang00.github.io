import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navigation } from "../components/Navigation";
import { Projects } from "../components/Projects";

export function PortfolioPage() {
  return (
    <>
      <Navigation />
      <main className="px-9 sm:px-20 lg:px-20">
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
