"use client";

//* Libraries imports
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

//* Context imports
import { useLanguage } from "@/components/context";

type Line =
  | { kind: "prompt"; cmd: string }
  | { kind: "output"; text: string }
  | { kind: "grid"; items: string[] }
  | { kind: "blank" };

function TerminalLine({ line }: { line: Line }) {
  if (line.kind === "blank") return <div className="h-2" aria-hidden="true" />;

  if (line.kind === "output")
    return <p className="text-foreground/80 pl-1">{line.text}</p>;

  if (line.kind === "prompt")
    return (
      <p>
        <span className="text-primary">thiago@dev</span>
        <span className="text-muted-foreground">:~$</span> {line.cmd}
      </p>
    );

  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-0.5 text-foreground/80 pl-1">
      {line.items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function Cursor() {
  return (
    <span className="inline-block w-[2px] h-[1em] bg-primary align-middle animate-pulse ml-0.5" />
  );
}

function TerminalWindow() {
  const [lines, setLines] = useState<Line[]>([]);
  const [typingCmd, setTypingCmd] = useState<string | null>(null);
  const [clearingCmd, setClearingCmd] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const pause = (ms: number) =>
      new Promise<void>((r) => setTimeout(r, ms));

    // Type text character by character into a state setter
    const type = async (
      setter: (v: string | null) => void,
      text: string,
      msPerChar = 180,
    ) => {
      let built = "";
      setter("");
      for (const char of text) {
        if (cancelled) return;
        // natural randomness: ±40ms
        await pause(msPerChar + Math.floor(Math.random() * 40) - 10);
        if (cancelled) return;
        built += char;
        setter(built);
      }
    };

    const run = async () => {
      await pause(1000);

      while (!cancelled) {
        // Reset
        setLines([]);
        setTypingCmd(null);
        setClearingCmd(null);

        // ── whoami ──────────────────────────────────────────
        await type(setTypingCmd, "whoami");
        if (cancelled) return;
        setLines([{ kind: "prompt", cmd: "whoami" }]);
        setTypingCmd(null);
        await pause(280);
        setLines((p) => [...p, { kind: "output", text: "thiago-saopedro" }]);
        await pause(150);
        setLines((p) => [...p, { kind: "blank" }]);

        // ── cat role.txt ─────────────────────────────────────
        await pause(600);
        await type(setTypingCmd, "cat role.txt");
        if (cancelled) return;
        setLines((p) => [...p, { kind: "prompt", cmd: "cat role.txt" }]);
        setTypingCmd(null);
        await pause(280);
        setLines((p) => [
          ...p,
          { kind: "output", text: "software engineer" },
        ]);
        await pause(150);
        setLines((p) => [...p, { kind: "blank" }]);

        // ── ls ./tech ────────────────────────────────────────
        await pause(600);
        await type(setTypingCmd, "ls ./tech");
        if (cancelled) return;
        setLines((p) => [...p, { kind: "prompt", cmd: "ls ./tech" }]);
        setTypingCmd(null);
        await pause(300);
        setLines((p) => [
          ...p,
          {
            kind: "grid",
            items: [
              "react",
              "laravel",
              "python",
              "next.js",
              "docker",
              "typescript",
            ],
          },
        ]);

        // ── hold then clear ──────────────────────────────────
        await pause(3500);
        if (cancelled) return;

        await type(setClearingCmd, "clear", 120);
        if (cancelled) return;
        await pause(450);

        setLines([]);
        setClearingCmd(null);
        await pause(500);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const showIdleCursor = typingCmd === null && clearingCmd === null;

  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden font-mono text-sm w-full max-w-md">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/40">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-2 text-[11px] text-muted-foreground tracking-wider">
          thiago@portfolio: ~
        </span>
      </div>

      {/* Content */}
      <div className="p-5 text-[13px] leading-6 min-h-[240px]">
        {/* Completed lines */}
        {lines.map((line, i) => (
          <TerminalLine key={i} line={line} />
        ))}

        {/* Command being typed */}
        {typingCmd !== null && (
          <p>
            <span className="text-primary">thiago@dev</span>
            <span className="text-muted-foreground">:~$</span> {typingCmd}
            <Cursor />
          </p>
        )}

        {/* "clear" being typed */}
        {clearingCmd !== null && (
          <p>
            <span className="text-primary">thiago@dev</span>
            <span className="text-muted-foreground">:~$</span> {clearingCmd}
            <Cursor />
          </p>
        )}

        {/* Idle prompt with blinking block cursor */}
        {showIdleCursor && (
          <p>
            <span className="text-primary">thiago@dev</span>
            <span className="text-muted-foreground">:~$</span>{" "}
            <span className="inline-block w-[9px] h-[14px] bg-primary align-middle animate-pulse" />
          </p>
        )}
      </div>
    </div>
  );
}

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center">
      <div className="mx-auto max-w-6xl w-full px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="font-mono text-sm text-primary tracking-wider">
                {t.hero.greeting}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
                Thiago
                <br />
                <span className="text-primary">São Pedro</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                {t.hero.subtitle}
              </h2>
            </div>

            <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#habilidades"
                className="inline-flex items-center justify-center rounded bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
              >
                {t.hero.ctaPrimary}
              </Link>
              <Link
                href="#contato"
                className="inline-flex items-center justify-center rounded border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>

            <div className="flex items-center gap-5 pt-2">
              <div className="h-px w-8 bg-border" aria-hidden="true" />
              <Link
                href="https://linkedin.com/in/thiagosaopedro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/ThiagoSaoPedro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="#contato"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right — Terminal */}
          <div className="hidden lg:flex items-center justify-center">
            <TerminalWindow />
          </div>
        </div>
      </div>
    </section>
  );
};
