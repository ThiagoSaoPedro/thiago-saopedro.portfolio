"use client";

//* Libraries imports
import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

//* Context imports
import { useLanguage } from "@/components/context";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const { t, lang } = useLanguage();
  const c = t.contact;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      toast.success(c.successToast);
      form.reset();
    } catch {
      toast.error(lang === "en" ? "Failed to send. Try again." : "Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 space-y-2">
          <p className="font-mono text-sm text-primary">$ ./contact.sh --send-message</p>
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              {c.section}
            </h2>
            <div className="h-px bg-border flex-1 max-w-[200px]" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {c.heading}
              </h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                {c.body}
              </p>
            </div>

            <div className="space-y-0">
              {[
                {
                  icon: Mail,
                  label: c.emailLabel,
                  value: "thiagosaopedroo07@gmail.com",
                  href: "mailto:thiagosaopedroo07@gmail.com",
                },
                {
                  icon: MapPin,
                  label: c.locationLabel,
                  value: c.locationValue,
                  href: null as string | null,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-5 py-5 border-b border-border first:border-t"
                >
                  <div className="w-10 h-10 rounded border border-primary/25 bg-primary/8 flex items-center justify-center flex-shrink-0">
                    <item.icon
                      className="h-4 w-4 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-[15px] text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="text-[15px] text-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                {
                  href: "https://linkedin.com/in/thiagosaopedro",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "https://github.com/ThiagoSaoPedro",
                  icon: Github,
                  label: "GitHub",
                },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center gap-2 border border-border rounded px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                  {social.label}
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider"
                  >
                    {c.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded text-foreground text-[15px] placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/60 focus:border-primary/60 transition-all"
                    placeholder={c.namePlaceholder}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider"
                  >
                    {c.emailFieldLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded text-foreground text-[15px] placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/60 focus:border-primary/60 transition-all"
                    placeholder={c.emailPlaceholder}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider"
                >
                  {c.subjectLabel}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded text-foreground text-[15px] placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/60 focus:border-primary/60 transition-all"
                  placeholder={c.subjectPlaceholder}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider"
                >
                  {c.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded text-foreground text-[15px] placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/60 focus:border-primary/60 transition-all resize-none"
                  placeholder={c.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/85 hover:-translate-y-0.5 shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {loading ? c.sending : c.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
