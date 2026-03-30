"use client";

//* Libraries imports
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

//* Context imports
import { useLanguage } from "@/components/context";

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 lg:px-8 border-t border-border">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-muted-foreground tracking-widest uppercase">
            tsp
          </span>
          <span className="text-border">·</span>
          <p className="font-mono text-xs text-muted-foreground">
            &copy; {currentYear} {t.footer.copyright}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://linkedin.com/in/thiagosaopedro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href="https://github.com/ThiagoSaoPedro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
