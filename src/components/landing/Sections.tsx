import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import {
  contactEmail,
  frameworks,
  governorates,
  needs,
  questions,
  sectors,
  services,
} from "./content";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionIntro } from "./shared";

export function Finding() {
  return (
    <section id="finding" className="tone-paper viewport-section border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <SectionIntro
            index="02"
            label="The finding"
            title="Written so it can be read once."
            text="Severity, the evidence, and the asset. That is the page a penetration test leaves behind."
          />
        </div>
        <article className="tone-ink rounded-2xl p-8 md:col-span-7 md:p-10">
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-[11px] tracking-[0.18em] text-signal uppercase">Sample</p>
            <p className="font-mono text-[11px] text-muted-foreground">Not a client engagement</p>
          </div>
          <p className="mt-10 font-mono text-xs tracking-[0.16em] text-alert uppercase">Critical</p>
          <h3 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
            Admin panel reachable from outside
          </h3>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            The evidence is attached. The asset is named. The test ends on this page.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6">
            <div>
              <dt className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">Severity</dt>
              <dd className="mt-2 text-sm">Critical</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">Evidence</dt>
              <dd className="mt-2 text-sm">Attached</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">Asset</dt>
              <dd className="mt-2 text-sm">Named</dd>
            </div>
          </dl>
        </article>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="tone-ink viewport-section border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionIntro
          index="03"
          label="Scope"
          title="What the test covers."
          text="Applications, systems, infrastructure and networks, inside the scope you authorise."
        />
        <ol className="mt-16 border-t border-border">
          {services.map((service, index) => (
            <li
              key={service.title}
              className="grid gap-3 border-b border-border py-8 md:grid-cols-12 md:items-baseline md:gap-6"
            >
              <span className="font-mono text-[11px] text-signal md:col-span-2">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl tracking-tight md:col-span-4">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:col-span-6">{service.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Sectors() {
  return (
    <section id="sectors" className="tone-paper viewport-section border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionIntro
          index="04"
          label="Sectors"
          title="Where the work usually sits."
          text="Energy, finance, government, ports, healthcare and telecom in Kuwait."
        />
        <ul className="mt-16 grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <li key={sector.title} className="border-r border-b border-border p-6 md:p-8">
              <h3 className="font-display text-xl tracking-tight">{sector.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{sector.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Assurance() {
  return (
    <section id="assurance" className="tone-paper viewport-section border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <SectionIntro
            index="06"
            label="Assurance"
            title="Findings mapped to the authority that applies."
            text="In Kuwait the report can be written against the CITRA framework. A certificate from somewhere else is not a substitute."
          />
        </div>
        <ul className="md:col-span-7">
          {frameworks.map((item) => (
            <li key={item.name} className="flex flex-col gap-1 border-t border-border py-4 sm:flex-row sm:items-baseline sm:justify-between">
              <span className="text-sm">{item.name}</span>
              <span className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground uppercase">
                {item.where}
              </span>
            </li>
          ))}
          <li className="border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
            Listing a framework is a statement of scope. It is not a claim of accreditation, partnership
            or regulatory approval.
          </li>
        </ul>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="tone-ink viewport-section border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-4">
          <SectionIntro
            index="07"
            label="Questions"
            title="Before the first call."
            text="Short answers. The longer ones belong in scoping."
          />
        </div>
        <div className="md:col-span-8">
          {questions.map((item) => (
            <details key={item.q} className="group border-t border-border">
              <summary className="cursor-pointer list-none py-5 font-display text-xl tracking-tight [&::-webkit-details-marker]:hidden">
                <span className="flex items-baseline justify-between gap-6">
                  {item.q}
                  <span className="font-mono text-xs text-muted-foreground group-open:hidden">+</span>
                  <span className="hidden font-mono text-xs text-signal group-open:inline">–</span>
                </span>
              </summary>
              <p className="max-w-xl pb-6 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}

function briefFrom(form: HTMLFormElement) {
  const data = new FormData(form);
  const lines = [
    "Kryptos — penetration test or remediation",
    `To: ${contactEmail}`,
    `Name: ${String(data.get("name") ?? "")}`,
    `Work email: ${String(data.get("email") ?? "")}`,
    `Organisation: ${String(data.get("organisation") ?? "")}`,
    `Governorate: ${String(data.get("governorate") ?? "")}`,
    `Need: ${String(data.get("need") ?? "")}`,
    "",
    String(data.get("message") ?? ""),
  ];
  return lines.join("\n");
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "copied" | "manual">("idle");
  const [brief, setBrief] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = briefFrom(event.currentTarget);
    setBrief(text);
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("manual");
    }
  }

  return (
    <section id="contact" className="tone-paper viewport-section">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <SectionIntro
            index="08"
            label="Briefing"
            title="Tell us what to test."
            text="Name the target in Kuwait, and whether you want the test, the remediation, or both. The brief is copied to your clipboard. Nothing is stored on this page."
          />
          <a
            href={`mailto:${contactEmail}`}
            className="mt-8 inline-flex font-mono text-sm tracking-wide text-foreground underline decoration-border underline-offset-4 hover:text-alert hover:decoration-alert"
          >
            {contactEmail}
          </a>
        </div>
        <form className="md:col-span-7" onSubmit={onSubmit}>
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Name" name="name" autoComplete="name" />
            <Field label="Work email" name="email" type="email" autoComplete="email" />
            <Field label="Organisation" name="organisation" autoComplete="organization" />
            <FormSelect
              label="Governorate"
              name="governorate"
              placeholder="Select a governorate"
              options={governorates.map((place) => place.name)}
            />
          </div>
          <FormSelect
            className="mt-6"
            label="What you need"
            name="need"
            placeholder="Select a service"
            options={needs}
          />
          <label className="mt-6 block text-sm">
            <span className="text-muted-foreground">The estate, in a few lines</span>
            <textarea
              name="message"
              required
              rows={4}
              className="mt-2 w-full resize-y border-b border-border bg-transparent py-3 text-foreground outline-none focus:border-primary"
            />
          </label>
          <button
            type="submit"
            className="mt-8 inline-flex h-11 items-center bg-primary px-5 text-sm font-medium text-primary-foreground"
          >
            Copy the request
          </button>
          <p className="mt-4 min-h-5 text-sm text-muted-foreground" role="status">
            {status === "copied" ? `Copied. Send it to ${contactEmail}.` : null}
            {status === "manual" ? "Clipboard unavailable. Copy the brief below." : null}
          </p>
          {status === "manual" ? (
            <textarea readOnly value={brief} rows={8} className="mt-2 w-full border border-border bg-card p-3 font-mono text-xs" />
          ) : null}
        </form>
      </div>
    </section>
  );
}

function FormSelect({
  className,
  label,
  name,
  placeholder,
  options,
}: {
  className?: string;
  label: string;
  name: string;
  placeholder: string;
  options: readonly string[];
}) {
  const labelId = `${name}-label`;
  return (
    <div className={cn("flex flex-col gap-2 text-sm", className)}>
      <span id={labelId} className="text-muted-foreground">
        {label}
      </span>
      <Select name={name} required>
        <SelectTrigger className="h-11 w-full shadow-none" aria-labelledby={labelId}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete: string;
}) {
  return (
    <label className="block text-sm">
      <span className="text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        className="mt-2 w-full border-b border-border bg-transparent py-3 text-foreground outline-none focus:border-primary"
      />
    </label>
  );
}

export function Footer() {
  return (
    <footer className="tone-ink border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-2xl tracking-tight">Kryptos</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Cybersecurity as a service for Kuwait.
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-4 inline-flex font-mono text-sm tracking-wide underline decoration-border underline-offset-4 hover:text-alert hover:decoration-alert"
          >
            {contactEmail}
          </a>
        </div>
        <div className="md:col-span-3">
          <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">Practice</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li><a href="#service" className="hover:text-alert">The offer</a></li>
            <li><a href="#services" className="hover:text-alert">Scope</a></li>
            <li><a href="#method" className="hover:text-alert">Method</a></li>
            <li><a href="#assurance" className="hover:text-alert">Assurance</a></li>
            <li><a href="#contact" className="hover:text-alert">Briefing</a></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">Kuwait</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Reports in Arabic or English. Scope is agreed before any access is granted.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex h-10 items-center bg-alert px-4 text-sm font-medium text-alert-foreground"
          >
            Request a test
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-border px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Kryptos. Cybersecurity as a service.</p>
        <p>Fees are on quote.</p>
      </div>
    </footer>
  );
}
