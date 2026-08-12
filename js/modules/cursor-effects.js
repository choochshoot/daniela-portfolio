export function initCursorEffects() {
  if (!window.matchMedia("(pointer: fine) and (min-width: 901px)").matches) return;
  window.addEventListener("pointermove", event => {
    document.documentElement.style.setProperty("--mx", `${event.clientX / innerWidth * 100}%`);
    document.documentElement.style.setProperty("--my", `${event.clientY / innerHeight * 100}%`);
  }, { passive: true });
}
