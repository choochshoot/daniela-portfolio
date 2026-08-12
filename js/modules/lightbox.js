export function initLightbox() {
  const dialog = document.querySelector("#lightbox");
  const image = document.querySelector("#lightboxImage");
  const closeButton = document.querySelector("#lightboxClose");
  if (!dialog || !image || typeof dialog.showModal !== "function") return;
  let trigger = null;
  const close = () => { if (dialog.open) dialog.close(); };
  document.querySelectorAll("[data-image]").forEach(button => button.addEventListener("click", () => {
    trigger = button; image.src = button.dataset.image; image.alt = button.querySelector("img")?.alt || "Vista ampliada";
    dialog.showModal(); document.body.classList.add("no-scroll"); closeButton?.focus();
  }));
  closeButton?.addEventListener("click", close);
  dialog.addEventListener("click", event => { if (event.target === dialog) close(); });
  dialog.addEventListener("close", () => { document.body.classList.remove("no-scroll"); image.removeAttribute("src"); trigger?.focus(); });
}
