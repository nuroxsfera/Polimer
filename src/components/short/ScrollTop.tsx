"use client";

import { useEffect } from "react";

/** Always open at hero — ignore hash & browser scroll restore on reload */
export function ScrollTop() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
    } catch {
      /* ignore */
    }

    const goTop = () => {
      const { hash, pathname, search } = window.location;
      if (hash) {
        try {
          history.replaceState(null, "", pathname + search);
        } catch {
          /* ignore */
        }
      }
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    goTop();
    requestAnimationFrame(goTop);
    const t = window.setTimeout(goTop, 50);

    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) goTop();
    };
    window.addEventListener("pageshow", onPageShow);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("pageshow", onPageShow);
    };
  }, []);

  return null;
}
