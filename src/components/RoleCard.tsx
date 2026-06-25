"use client";

import { useEffect, useRef, useState } from "react";
import { WidgetCircle } from "@/components/WidgetCircle";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const INTERVAL_MS = 3000;
const TRANSITION_MS = 400;

type RoleCardProps = {
  roles: string[];
  stagger?: number;
};

export function RoleCard({ roles, stagger = 0 }: RoleCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const displayRole = roles[index] ?? roles[0] ?? "";

  useEffect(() => {
    if (prefersReducedMotion || roles.length <= 1) return;

    const interval = setInterval(() => {
      setVisible(false);
      transitionTimeoutRef.current = setTimeout(() => {
        setIndex((current) => (current + 1) % roles.length);
        setVisible(true);
      }, TRANSITION_MS);
    }, INTERVAL_MS);

    return () => {
      clearInterval(interval);
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [prefersReducedMotion, roles.length]);

  return (
    <WidgetCircle
      stagger={stagger}
      className="widget-circle-nav mb-4 border-transparent bg-transparent px-0 py-0 text-base font-medium text-accent"
      aria-live="polite"
      aria-atomic="true"
      role="status"
      aria-label={`Current role: ${displayRole}`}
    >
      <span
        className={`role-cycle-text block min-w-[20ch] whitespace-nowrap text-left motion-reduce:transform-none ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-1.5 opacity-0"
        }`}
      >
        {prefersReducedMotion ? (roles[0] ?? displayRole) : displayRole}
      </span>
    </WidgetCircle>
  );
}
