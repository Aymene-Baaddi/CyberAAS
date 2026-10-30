import { useLayoutEffect, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: { children: ReactNode }) {
  useLayoutEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      duration: 1.05,
    });

    const onAnchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const origin = event.target instanceof Element ? event.target : null;
      const link = origin?.closest("a");
      if (!(link instanceof HTMLAnchorElement) || !link.hash) return;

      const url = new URL(link.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return;

      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, { offset: -72 });
    };

    const clearHash = (immediate: boolean) => {
      if (!window.location.hash) return;
      const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
      if (target) lenis.scrollTo(target, { offset: -72, immediate });
    };

    const onHashChange = () => clearHash(false);

    document.addEventListener("click", onAnchorClick);
    window.addEventListener("hashchange", onHashChange);
    const onLoad = () => clearHash(true);
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);
    requestAnimationFrame(() => clearHash(true));

    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("load", onLoad);
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, []);

  return children;
}
