"use client";

//* Libraries imports
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

//* Context imports
import { useLanguage } from "@/components/context";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { lang, t, toggle: toggleLang } = useLanguage();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: t.nav.about, href: "#sobre" },
    { name: t.nav.experience, href: "#experiencia" },
    { name: t.nav.skills, href: "#habilidades" },
    { name: t.nav.contact, href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="font-mono text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
          aria-label="Home"
        >
          <span className="text-primary">~/</span>thiago-saopedro
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary group"
            >
              <span className="text-primary">~/</span>
              {item.name.toLowerCase()}
              <span className="text-primary">/</span>
            </Link>
          ))}

          {/* Theme toggle */}
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          {/* Language toggle */}
          <button
            type="button"
            onClick={toggleLang}
            className="font-mono text-[11px] font-semibold tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
            aria-label="Toggle language"
          >
            {lang === "en" ? "PT" : "EN"}
          </button>
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <button
            type="button"
            onClick={toggleLang}
            className="font-mono text-[11px] font-semibold tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
            aria-label="Toggle language"
          >
            {lang === "en" ? "PT" : "EN"}
          </button>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="space-y-1 px-6 py-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 font-mono text-base text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-primary">~/</span>
                {item.name.toLowerCase()}
                <span className="text-primary">/</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
