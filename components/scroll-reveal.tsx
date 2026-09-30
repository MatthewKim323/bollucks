"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Adds `is-inview` to every [data-scroll] node on mount and smooth-scrolls same-page hash links (64px nav offset).
export function ScrollReveal() {
  const pathname = usePathname();
  useEffect(() => {
    document.querySelectorAll("[data-scroll]").forEach((el) => el.classList.add("is-inview"));
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href*='#']");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href) return;
      const hash = href.indexOf("#");
      if (hash === -1) return;
      const path = href.slice(0, hash);
      if (path && path !== "/" && path !== window.location.pathname) return;
      const target = document.querySelector(href.slice(hash));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: "smooth" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);
  return null;
}
