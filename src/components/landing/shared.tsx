import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.85, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ index, children }: { index: string; children: string }) {
  return (
    <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
      <span className="text-signal">{index}</span>
      {children}
    </p>
  );
}

export function SectionIntro({
  index,
  label,
  title,
  text,
}: {
  index: string;
  label: string;
  title: string;
  text: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <Eyebrow index={index}>{label}</Eyebrow>
      <h2 className="mt-5 font-display text-4xl leading-[1.05] font-medium tracking-tight md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{text}</p>
    </Reveal>
  );
}
