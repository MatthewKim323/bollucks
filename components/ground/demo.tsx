"use client";

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type RefObject } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ACCENT,
  EASE_OUT_QUINT,
  SCENARIOS,
  SOURCES,
  STAGES,
  STATUS,
  STATUS_ALL,
  type Fragment,
  type Scenario,
  type StageId,
} from "./data";

/* Stage loop: document (4500ms) -> sync (3000ms) -> next scenario. Only ticks while >25% visible. */
export function useStageLoop(ref: RefObject<HTMLElement | null>) {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting && e.intersectionRatio > 0.25),
      { threshold: [0, 0.25, 0.5, 1] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);

  useEffect(() => {
    if (reduced) setStageIndex(STAGES.length - 1);
  }, [reduced]);

  useEffect(() => {
    if (reduced || !visible) return;
    const t = setTimeout(() => {
      if (stageIndex < STAGES.length - 1) {
        setStageIndex(stageIndex + 1);
      } else {
        setScenarioIndex((i) => (i + 1) % SCENARIOS.length);
        setStageIndex(0);
      }
    }, STAGES[stageIndex].durationMs);
    return () => clearTimeout(t);
  }, [stageIndex, visible, reduced]);

  return { scenario: SCENARIOS[scenarioIndex], stageId: STAGES[stageIndex].id };
}

/* Three source slots; every 3500ms the next slot (round robin) takes the next logo. */
export function useSourceSlots() {
  const [slots, setSlots] = useState([0, 1, 2]);
  const tick = useRef(0);
  useEffect(() => {
    const id = setInterval(() => {
      const n = tick.current;
      const slot = n % 3;
      const next = (n + 3) % SOURCES.length;
      setSlots((s) => {
        const c = [...s];
        c[slot] = next;
        return c;
      });
      tick.current = n + 1;
    }, 3500);
    return () => clearInterval(id);
  }, []);
  return slots.map((i) => SOURCES[i]);
}

export function SourceCard({ logo, alt, active, size = 96 }: { logo: string; alt: string; active: boolean; size?: number }) {
  return (
    <div className={`hd-depth-sm relative w-fit rounded-xl p-1.5 transition-opacity duration-500 ${active ? "opacity-100" : "opacity-60"}`}>
      <div className="flex size-20 items-center justify-center rounded-lg bg-white relative overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={logo}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.3, ease: EASE_OUT_QUINT }}
            className="absolute inset-0 flex items-center justify-center overflow-visible"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={alt}
              loading="lazy"
              width={size}
              height={size}
              decoding="async"
              data-nimg="1"
              className="shrink-0 max-w-none object-contain"
              src={logo}
              style={{ color: "transparent", width: size, height: size }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function Connector({ active, direction }: { active: boolean; direction: "right" | "left" }) {
  return (
    <div className="relative h-px w-28 bg-[var(--hd-border-subtle)] overflow-visible">
      {active && (
        <motion.div
          className="absolute top-0 h-px pointer-events-none"
          style={{
            width: "32%",
            background:
              direction === "right"
                ? "linear-gradient(90deg, transparent 0%, var(--hd-accent) 100%)"
                : "linear-gradient(90deg, var(--hd-accent) 0%, transparent 100%)",
          }}
          initial={{ left: "-50%" }}
          animate={{ left: "118%" }}
          transition={{ duration: 2.2, ease: EASE_OUT_QUINT, repeat: Infinity, repeatDelay: 0.8 }}
        />
      )}
    </div>
  );
}

function DocFragment({ fragment }: { fragment: Fragment }) {
  if (!fragment.highlight) return <span>{fragment.text}</span>;
  const { delay, duration, type = "wash" } = fragment.highlight;
  return (
    <span
      className={type === "pill" ? "hd-doc-highlight-pill" : "hd-doc-highlight"}
      style={{ "--delay": `${delay}ms`, "--duration": `${duration}ms` } as CSSProperties}
    >
      {fragment.text}
    </span>
  );
}

function DocPanel({ scenario, active }: { scenario: Scenario; active: boolean }) {
  return (
    <div data-active={active} className="hd-state-swap relative col-start-1 row-start-1 h-full overflow-hidden">
      <div className="flex h-full flex-col px-6 pt-6 pb-5">
        <div className="text-[13px] font-mono text-[var(--hd-text-primary)] mb-4">{scenario.doc.title}</div>
        <div className="space-y-3 text-[13px] font-mono leading-[1.65] text-[var(--hd-text-tertiary)]">
          {scenario.doc.blocks.map((b, i) =>
            b.type === "heading" ? (
              <div key={i} className="text-[11px] font-mono uppercase tracking-[0.04em] text-[var(--hd-accent)] pt-1">
                {b.text}
              </div>
            ) : (
              <p key={i}>
                {b.fragments.map((f, j) => (
                  <DocFragment key={j} fragment={f} />
                ))}
              </p>
            ),
          )}
        </div>
      </div>
      <div className="hd-doc-shimmer" aria-hidden="true" />
    </div>
  );
}

function SyncPanel({ scenario, active }: { scenario: Scenario; active: boolean }) {
  return (
    <div data-active={active} className="hd-state-swap relative col-start-1 row-start-1 flex h-full flex-col overflow-hidden">
      <div className="flex-1 px-5 pt-5 pb-3">
        <div className="grid grid-cols-[1fr_auto] gap-x-3 h-[24px] items-center text-micro font-mono uppercase tracking-[0.04em] text-[var(--hd-text-muted)] border-b border-[var(--hd-border-subtle)]">
          <span>Extracted facts</span>
          <span className="text-right">Source</span>
        </div>
        {scenario.sync.facts.map((f, i) => (
          <div
            key={f.key}
            className="hd-sync-row grid grid-cols-[1fr_auto] items-center gap-x-3 h-[50px] border-b border-[var(--hd-border-subtle)] last:border-b-0"
            style={{ "--row-delay": `${200 + 100 * i}ms` } as CSSProperties}
          >
            <div className="min-w-0 flex flex-col gap-0.5">
              <span className="text-[13px] font-mono text-[var(--hd-accent)] truncate">{f.value}</span>
              <span className="text-[10px] font-mono text-[var(--hd-text-muted)] truncate">{f.key}</span>
            </div>
            <span className="text-[10px] font-mono text-[var(--hd-text-muted)] text-right truncate">{f.src}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DocCard({ scenario, stageId }: { scenario: Scenario; stageId: StageId }) {
  return (
    <div className="hd-depth-hero relative grid h-full w-full overflow-clip rounded-xl">
      <DocPanel scenario={scenario} active={stageId === "document"} />
      <SyncPanel scenario={scenario} active={stageId === "sync"} />
    </div>
  );
}

/* Status pill: "Reading document" -> (1600ms) "Detecting key facts"; sync shows "Extracting claims". */
export function StatusPill({ stageId }: { stageId: StageId }) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    setStep(0);
    if (stageId === "document") {
      const t = setTimeout(() => setStep(1), 1600);
      return () => clearTimeout(t);
    }
  }, [stageId]);

  const measure = useRef(new Map<string, HTMLSpanElement | null>());
  const [widths, setWidths] = useState<Record<string, number>>({});
  useLayoutEffect(() => {
    const w: Record<string, number> = {};
    measure.current.forEach((el, k) => {
      if (el) w[k] = el.getBoundingClientRect().width;
    });
    setWidths(w);
  }, []);

  const list = STATUS[stageId];
  const label = list[Math.min(step, list.length - 1)];
  const key = `${stageId}-${step}`;
  const width = widths[label] ? widths[label] + 18 : "auto";

  return (
    <>
      <div aria-hidden="true" className="absolute pointer-events-none opacity-0" style={{ left: -9999, top: -9999, visibility: "hidden" }}>
        {STATUS_ALL.map((s) => (
          <span
            key={s}
            ref={(el) => {
              measure.current.set(s, el);
            }}
            className="text-[13px] font-mono whitespace-nowrap"
          >
            {s}
          </span>
        ))}
      </div>
      <motion.div
        className="pointer-events-none absolute left-1/2 bottom-4 z-20 flex flex-col items-center"
        initial={{ opacity: 0, y: 8, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 0.3, ease: EASE_OUT_QUINT, delay: 0.4 }}
      >
        <motion.div
          animate={{ width }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          className="hd-depth-pill inline-flex items-center justify-center rounded-[10px] px-2 py-1 overflow-hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={key}
              className="text-[13px] font-mono whitespace-nowrap"
              style={{ color: ACCENT }}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.28, ease: EASE_OUT_QUINT }}
            >
              {label}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  );
}

const PATHS = [
  "M 0 134 C 50 134, 50 230, 120 230",
  "M 0 230 L 120 230",
  "M 0 326 C 50 326, 50 230, 120 230",
];

export function AgentLines({ sync, sourceIndex }: { sync: boolean; sourceIndex: number }) {
  return (
    <svg width="120" height="460" viewBox="0 0 120 460" className="shrink-0" fill="none" aria-hidden="true">
      {PATHS.map((d, i) => [
        <path key={`b${i}`} d={d} stroke="var(--hd-border-subtle)" strokeWidth="1" />,
        sync && sourceIndex === i ? (
          <path key={`a${i}`} d={d} stroke="var(--hd-accent)" strokeWidth="1" pathLength={1} className="hd-laser-active" />
        ) : null,
      ])}
    </svg>
  );
}

const SHADOW_BASE =
  "inset 0 0 0 1px rgba(24, 46, 95, 0.10), inset 0 0 0 2px rgba(255, 255, 255, 1), inset 0 0 0 3px rgba(24, 46, 95, 0.05), inset 0 -3px 6px -3px rgba(24, 46, 95, 0.08), 0 1px 1px rgba(24, 46, 95, 0.05), 0 2px 6px -2px rgba(24, 46, 95, 0.07), 0 6px 16px -4px rgba(24, 46, 95, 0.07)";
const SHADOW_OFF = `${SHADOW_BASE}, 0 0 0 0px rgba(76, 110, 178, 0), 0 0 0px 0px rgba(76, 110, 178, 0)`;
const SHADOW_ON = `${SHADOW_BASE}, 0 0 0 1px rgba(76, 110, 178, 0.28), 0 0 10px 0px rgba(76, 110, 178, 0.18)`;
const PULSE = {
  duration: 2.8,
  times: [0, 0.78, 0.8, 1],
  ease: ["linear", [0.16, 1, 0.3, 1], [0.4, 0, 0.6, 1]] as const,
  repeat: Infinity,
};

export function AgentCard({ sync }: { sync: boolean }) {
  return (
    <motion.div
      className="hd-depth-sm relative w-fit rounded-xl p-1.5"
      animate={sync ? { boxShadow: [SHADOW_OFF, SHADOW_OFF, SHADOW_ON, SHADOW_OFF] } : { boxShadow: SHADOW_BASE }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transition={(sync ? PULSE : { duration: 0.55 }) as any}
    >
      <div className="flex size-20 items-center justify-center rounded-lg bg-white">
        <motion.div
          className="hd-user-card flex size-10 items-end justify-center rounded-full"
          animate={
            sync
              ? {
                  filter: [
                    "brightness(1) saturate(1)",
                    "brightness(1) saturate(1)",
                    "brightness(1.18) saturate(1.25)",
                    "brightness(1) saturate(1)",
                  ],
                  scale: [1, 1, 1.06, 1],
                }
              : { filter: "brightness(1) saturate(1)", scale: 1 }
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          transition={(sync ? PULSE : { duration: 0.55 }) as any}
        >
          <svg width="34" height="34" viewBox="0 0 24 28" fill="none" aria-hidden="true" className="translate-y-0.5">
            <circle cx="12" cy="9" r="4.8" fill="white" />
            <path d="M0 28c0-7 5.4-12 12-12s12 5 12 12z" fill="white" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
