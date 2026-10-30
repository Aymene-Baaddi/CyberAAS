import { serviceLines } from "./content";
import { Eyebrow } from "./shared";

export function Service() {
  return (
    <section id="service" className="tone-ink viewport-section border-b border-border">
      <div className="mx-auto grid max-w-6xl items-start gap-14 px-6 py-24 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <Eyebrow index="01">The offer</Eyebrow>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
            Two services, each on quote.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            For organisations in Kuwait. A penetration test delivers the flaws. Remediation proposes
            the fixes and applies them. Neither has a public rate card.
          </p>
        </div>
        <ol className="md:col-span-7">
          {serviceLines.map((line) => (
            <li key={line.index} className="border-t border-border py-7">
              <p className="font-mono text-[11px] text-alert">{line.index}</p>
              <h3 className="mt-3 font-display text-2xl tracking-tight">{line.title}</h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{line.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
