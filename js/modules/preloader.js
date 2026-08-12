export function initPreloader() {
  const loader = document.querySelector("#preloader");
  if (!loader) return;
  const start = performance.now();
  let hidden = false;
  const hide = () => {
    if (hidden) return;
    hidden = true;
    window.setTimeout(() => loader.classList.add("is-hidden"), Math.max(0, 750 - (performance.now() - start)));
  };
  if (document.readyState === "complete") hide();
  else window.addEventListener("load", hide, { once: true });
  window.setTimeout(hide, 3500);
}
