## Architecture

- Application React client uniquement, démarrée par Vite (`index.html` → `src/main.tsx` → `src/App.tsx`). Pas de SSR.
- Le hero est typographique, sans scène WebGL. La police d’affichage est Space Grotesk.
- Les sections alternent `tone-ink` (fond noir) et `tone-paper` (fond blanc). Ces classes redéfinissent les variables de couleur pour que le texte reste lisible.
- Les polices (Space Grotesk, JetBrains Mono) sont chargées par `<link>` dans `index.html` — jamais via `@import` d’une URL de police dans `src/styles.css`.
- Le scroll fluide est assuré par Lenis, synchronisé avec GSAP dans `src/components/landing/SmoothScroll.tsx`.
- La section Method est épinglée au scroll via GSAP ScrollTrigger à partir de 768px. En dessous, et si l’utilisateur préfère moins d’animation, les quatre temps sont empilés.
