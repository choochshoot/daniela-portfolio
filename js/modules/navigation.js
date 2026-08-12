export function initNavigation() {
  const toggle = document.querySelector("#menuToggle");
  const nav = document.querySelector("#siteNav");
  if (!toggle || !nav) return;
  const close = () => { toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Abrir menú"); nav.classList.remove("is-open"); };
  toggle.addEventListener("click", () => {
    const willOpen = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(willOpen));
    toggle.setAttribute("aria-label", willOpen ? "Cerrar menú" : "Abrir menú");
    nav.classList.toggle("is-open", willOpen);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", close));
  document.addEventListener("keydown", event => { if (event.key === "Escape") close(); });
}
