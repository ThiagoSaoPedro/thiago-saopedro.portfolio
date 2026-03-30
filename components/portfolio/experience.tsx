"use client";

//* Libraries imports
import { ExternalLink } from "lucide-react";

//* Context imports
import { useLanguage } from "@/components/context";

export const Experience = () => {
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <section id="experiencia" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 space-y-2">
          <p className="font-mono text-sm text-primary">$ ls -la experience/</p>
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              {e.section}
            </h2>
            <div className="h-px bg-border flex-1 max-w-[200px]" />
          </div>
        </div>

        <div className="space-y-0">
          {e.jobs.map((job, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 py-10 border-b border-border last:border-0 hover:bg-card/40 transition-colors rounded-lg px-4 -mx-4"
            >
              {/* Period column */}
              <div className="flex md:flex-col md:items-start items-center gap-3 md:gap-1.5 pt-1">
                <span className="font-mono text-xs text-muted-foreground">
                  {job.period}
                </span>
                <span className="font-mono text-xs text-muted-foreground hidden md:block">
                  — {job.end}
                </span>
                {job.current && (
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-primary border border-primary/30 rounded-full px-2 py-0.5 mt-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"
                      aria-hidden="true"
                    />
                    {t.nav.contact === "Contact" ? "Current" : "Atual"}
                  </span>
                )}
              </div>

              {/* Content column */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {job.title}
                    <ExternalLink
                      className="inline-block ml-2 h-3.5 w-3.5 opacity-0 group-hover:opacity-60 transition-opacity"
                      aria-hidden="true"
                    />
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {job.company} · {job.location}
                  </p>
                </div>

                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] text-primary/80 bg-primary/8 border border-primary/15 rounded px-2.5 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
