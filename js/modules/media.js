export function initMedia() {
  document.querySelectorAll("video").forEach(video => {
    const attemptPlay = () => video.play().catch(() => {});
    if (document.visibilityState === "visible") attemptPlay();
    document.addEventListener("visibilitychange", () => document.visibilityState === "visible" ? attemptPlay() : video.pause());
  });
}
