import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { method } from "./content";
import { Eyebrow } from "./shared";

gsap.registerPlugin(ScrollTrigger);

export default function Method() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const current = method[active] ?? method[0];

  useLayoutEffect(() => {
    const section = root.current;
    if (!section) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=2400",
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const next = Math.min(method.length - 1, Math.floor(self.progress * method.length));
          setActive((previous) => (previous === next ? previous : next));
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="method" ref={root} className="tone-ink viewport-section border-t border-border bg-background">
      <div className="mx-auto hidden min-h-screen max-w-6xl flex-col justify-center px-6 py-24 md:flex">
        <Eyebrow index="05">Method</Eyebrow>
        <div className="mt-12 grid grid-cols-12 gap-12">
          <ol className="col-span-4">
            {method.map((step, index) => (
              <li key={step.index} className="border-t border-border">
                <p
                  className={`flex items-baseline gap-4 py-5 font-display text-3xl tracking-tight transition-colors ${
                    index === active ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  <span className="font-mono text-xs text-signal">{step.index}</span>
                  {step.title}
                </p>
              </li>
            ))}
          </ol>
          <div className="col-span-7 col-start-6 border-t border-border pt-6" aria-live="polite">
            <h2 className="font-display text-5xl tracking-tight">{current.title}</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">{current.text}</p>
          </div>
        </div>
        <div className="mt-16 h-px bg-border">
          <div
            className="h-px bg-signal transition-[width] duration-500"
            style={{ width: `${((active + 1) / method.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24 md:hidden">
        <Eyebrow index="05">Method</Eyebrow>
        <h2 className="mt-5 font-display text-4xl tracking-tight">Four steps.</h2>
        <ol className="mt-10">
          {method.map((step) => (
            <li key={step.index} className="border-t border-border py-6">
              <p className="font-mono text-[11px] text-signal">{step.index}</p>
              <h3 className="mt-2 font-display text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
