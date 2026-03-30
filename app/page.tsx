//* Components imports
import { Navbar, Footer } from "@/components/layout";
import { Hero, About, Experience, Skills, Contact } from "@/components/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
