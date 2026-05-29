"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

// Node positions in the SVG's 60×26 coordinate space, in build order.
const NODES = [
  { cx: 6, cy: 18 },
  { cx: 24, cy: 7 },
  { cx: 42, cy: 19 },
  { cx: 54, cy: 8 },
];

// Solid edges connect consecutive nodes; the dashed edge is an accent.
const EDGES = [
  { x1: 6, y1: 18, x2: 24, y2: 7 },
  { x1: 24, y1: 7, x2: 42, y2: 19 },
  { x1: 42, y1: 19, x2: 54, y2: 8 },
];

const WORDS = ["Plan", "Connect", "Ship"];

export function HeroGraphBadge({ label }: { label?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray<SVGCircleElement>(".hgb-node");
      const edges = gsap.utils.toArray<SVGLineElement>(".hgb-edge");
      const dashed = ".hgb-edge-dash";
      const pulse = ".hgb-pulse";
      const words = gsap.utils.toArray<HTMLElement>(".hgb-word");

      if (reduce) {
        // Show the finished graph and first word, no motion.
        gsap.set(nodes, { attr: { r: 3.2 }, opacity: 1 });
        gsap.set(edges, { strokeDashoffset: 0 });
        gsap.set(dashed, { opacity: 1 });
        gsap.set(words[0], { yPercent: 0, opacity: 1 });
        return;
      }

      // Graph keeps drawing itself, then a signal travels across it.
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.7,
        defaults: { ease: "power2.out" },
      });

      tl.set(nodes, { attr: { r: 0 }, opacity: 0 })
        .set(edges, { strokeDasharray: 1, strokeDashoffset: 1 })
        .set(dashed, { opacity: 0 })
        .set(pulse, { opacity: 0 });

      nodes.forEach((node, i) => {
        tl.to(
          node,
          { attr: { r: 3.2 }, opacity: 1, duration: 0.28, ease: "back.out(2.4)" },
          i === 0 ? 0 : "-=0.12",
        );
        if (edges[i]) {
          tl.to(edges[i], { strokeDashoffset: 0, duration: 0.32 }, "-=0.06");
        }
      });

      tl.to(dashed, { opacity: 1, duration: 0.3 }, "-=0.1");

      // Signal pulse travelling along the path.
      tl.set(pulse, { attr: { cx: NODES[0].cx, cy: NODES[0].cy }, opacity: 1 });
      for (let i = 1; i < NODES.length; i += 1) {
        tl.to(pulse, {
          attr: { cx: NODES[i].cx, cy: NODES[i].cy },
          duration: 0.24,
          ease: "none",
        });
      }
      tl.to(pulse, { opacity: 0, duration: 0.25 }).to({}, { duration: 0.5 });

      // Caption words cycling in sync with the loop.
      const wtl = gsap.timeline({ repeat: -1 });
      words.forEach((word) => {
        wtl
          .fromTo(
            word,
            { yPercent: 70, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.45, ease: "power3.out" },
          )
          .to(
            word,
            { yPercent: -70, opacity: 0, duration: 0.4, ease: "power3.in" },
            "+=1.05",
          );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="inline-flex items-center gap-2.5 rounded-full border border-emerald-300/25 bg-emerald-300/[0.06] py-1.5 pl-2.5 pr-4"
      aria-label={label}
    >
      <svg
        viewBox="0 0 60 26"
        className="h-[18px] w-[42px] overflow-visible"
        fill="none"
        aria-hidden="true"
      >
        {EDGES.map((e, i) => (
          <line
            key={i}
            className="hgb-edge"
            x1={e.x1}
            y1={e.y1}
            x2={e.x2}
            y2={e.y2}
            pathLength={1}
            stroke="rgba(110,231,183,0.85)"
            strokeWidth={1.4}
            strokeLinecap="round"
          />
        ))}
        <line
          className="hgb-edge-dash"
          x1={24}
          y1={7}
          x2={54}
          y2={8}
          stroke="rgba(110,231,183,0.4)"
          strokeWidth={1.2}
          strokeDasharray="2 2.5"
          strokeLinecap="round"
        />
        {NODES.map((n, i) => (
          <circle
            key={i}
            className="hgb-node"
            cx={n.cx}
            cy={n.cy}
            r={0}
            fill="#6ee7b7"
          />
        ))}
        <circle className="hgb-pulse" r={1.7} fill="#ecfdf5" opacity={0} />
      </svg>
      <span
        className="relative block h-4 w-[58px] overflow-hidden text-xs font-medium uppercase tracking-[0.18em] text-emerald-200/90"
        aria-hidden="true"
      >
        {WORDS.map((word) => (
          <span
            key={word}
            className="hgb-word absolute inset-0 flex items-center opacity-0"
          >
            {word}
          </span>
        ))}
      </span>
    </div>
  );
}
