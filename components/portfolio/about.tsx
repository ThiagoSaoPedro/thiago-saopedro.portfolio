"use client";

//* Context imports
import { useLanguage } from "@/components/context";

export const About = () => {
  const { t } = useLanguage();
  const a = t.about;

  const info = [
    { label: a.labels.location, value: a.values.location },
    { label: a.labels.company, value: a.values.company },
    { label: a.labels.graduation, value: a.values.graduation },
    { label: a.labels.postGrad, value: a.values.postGrad },
    { label: a.labels.languages, value: a.values.languages },
    { label: a.labels.availability, value: a.values.availability },
  ];

  return (
    <section id="sobre" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 space-y-2">
          <p className="font-mono text-sm text-primary">$ cat about.md</p>
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              {a.section}
            </h2>
            <div className="h-px bg-border flex-1 max-w-[200px]" />
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3 space-y-5">
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              {a.p1}
            </p>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              {a.p2}
            </p>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              {a.p3}
            </p>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              {a.p4}
            </p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {info.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 py-4 border-b border-border last:border-0"
              >
                <span className="font-mono text-[11px] text-primary min-w-[110px] pt-0.5 uppercase tracking-wider">
                  {item.label}
                </span>
                <span className="text-foreground text-[15px]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
