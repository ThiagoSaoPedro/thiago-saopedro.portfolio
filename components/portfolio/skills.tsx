"use client";

//* Context imports
import { useLanguage } from "@/components/context";

export const Skills = () => {
  const { t } = useLanguage();
  const s = t.skills;

  return (
    <section id="habilidades" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 space-y-2">
          <p className="font-mono text-sm text-primary">$ ls ./skills --group-by category</p>
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              {s.section}
            </h2>
            <div className="h-px bg-border flex-1 max-w-[200px]" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {s.groups.map((group) => (
            <div key={group.label} className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[12px] text-muted-foreground hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
