import { useEffect, useState } from "react";

const script = [
  { tone: "cmd", text: "kryptos scan --target sample.estate --full" },
  { tone: "ok", mark: "[+]", text: "Exposed services identified" },
  { tone: "ok", mark: "[+]", text: "Attack surface mapped inside the agreed scope" },
  { tone: "bad", mark: "[!]", text: "Critical — admin panel reachable from outside" },
  { tone: "bad", mark: "[!]", text: "Reused credentials on privileged accounts" },
  { tone: "done", mark: "[✓]", text: "Findings written." },
  { tone: "done", mark: "[✓]", text: "Remediation is quoted separately." },
  { tone: "status", text: "DOES YOUR SYSTEM HOLD?  →  request a test" },
] as const;

type ScriptLine = (typeof script)[number];

function lineClass(tone: ScriptLine["tone"]) {
  if (tone === "bad") return "text-alert";
  if (tone === "cmd" || tone === "status") return "text-foreground";
  return "text-signal";
}

function ScanTerminal() {
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduce(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const current = script[line];
    if (!current) {
      const hold = window.setTimeout(() => {
        setLine(0);
        setChars(0);
      }, 2400);
      return () => window.clearTimeout(hold);
    }
    if (chars >= current.text.length) {
      const pause = window.setTimeout(() => {
        setLine((value) => value + 1);
        setChars(0);
      }, 380);
      return () => window.clearTimeout(pause);
    }
    const tick = window.setTimeout(() => setChars((value) => value + 1), current.tone === "cmd" ? 22 : 12);
    return () => window.clearTimeout(tick);
  }, [line, chars, reduce]);

  const visible = reduce ? script.length : Math.min(line + 1, script.length);

  return (
    <div className="tone-ink overflow-hidden rounded-2xl border border-black/10 bg-[#101513] shadow-[0_40px_80px_oklch(0.2_0.01_150/18%)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-signal" />
          <p className="ml-2 font-mono text-[11px] text-muted-foreground">kryptos — zsh</p>
          <p className="ml-auto font-mono text-[10px] tracking-[0.16em] text-signal uppercase">Sample</p>
        </div>
        <div className="px-6 py-5 sm:px-8" aria-hidden="true">
          {script.slice(0, visible).map((item, index) => {
            const active = !reduce && index === line && line < script.length;
            const text = reduce || index < line ? item.text : item.text.slice(0, chars);
            return (
              <p key={item.text} className={`font-mono text-sm leading-8 sm:text-base ${lineClass(item.tone)}`}>
                {item.tone === "cmd" ? <span className="text-signal">$ </span> : null}
                {item.tone === "status" ? <span className="text-muted-foreground">$ status: </span> : null}
                {"mark" in item ? <span className="mr-2">{item.mark}</span> : null}
                {text}
                {active ? <span className="term-cursor" /> : null}
              </p>
            );
          })}
        </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero-stage tone-paper relative flex min-h-[100svh] flex-col overflow-hidden">
      <div className="hero-wash" aria-hidden="true">
        <span className="hero-orb hero-orb-green" />
        <span className="hero-orb hero-orb-red" />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 pt-32 text-center">
        <p className="font-mono text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
          Cybersecurity as a service · Kuwait
        </p>
        <h1 className="mt-5 font-display text-5xl leading-[0.96] font-medium tracking-tight sm:text-7xl">
          <span className="block text-neutral-400">We test the system.</span>
          <span className="mt-1 block text-foreground">You receive the flaws.</span>
        </h1>
        
      </div>

      <div className="relative z-10 mx-auto mt-14 w-full max-w-5xl flex-1 px-4 sm:px-6">
        <ScanTerminal />
        <p className="mt-4 text-center font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
          Sample output. Not a client engagement.
        </p>
      </div>

      
    </section>
  );
}
