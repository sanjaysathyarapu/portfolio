"use client";

import { useEffect, useRef, useState } from "react";

const TOP_ZONE_PX = 80;
const SCROLL_DELTA_THRESHOLD = 4;

/**
 * Navbar visibility:
 * - Always visible while the hero section is in the viewport
 * - Past hero: hides on scroll down, shows when cursor enters the top zone
 * - Touch devices: scroll up reveals the navbar (no hover cursor)
 */
export function useNavbarVisibility(): boolean {
  const [visible, setVisible] = useState(true);
  const heroInViewRef = useRef(true);
  const lastScrollYRef = useRef(0);
  const canUseCursorRef = useRef(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        heroInViewRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    canUseCursorRef.current = finePointer.matches;

    const onChange = (event: MediaQueryListEvent) => {
      canUseCursorRef.current = event.matches;
    };

    finePointer.addEventListener("change", onChange);
    return () => finePointer.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollYRef.current;
      lastScrollYRef.current = currentY;

      if (heroInViewRef.current) {
        setVisible(true);
        return;
      }

      if (Math.abs(delta) < SCROLL_DELTA_THRESHOLD) return;

      if (delta > 0) {
        setVisible(false);
        return;
      }

      if (!canUseCursorRef.current) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      if (!canUseCursorRef.current) return;

      if (event.clientY <= TOP_ZONE_PX) {
        setVisible(true);
        return;
      }

      if (!heroInViewRef.current) {
        setVisible(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return visible;
}
