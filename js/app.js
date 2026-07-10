// HRX AudioLab Main Script

console.log("HRX AudioLab Loaded");

// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js")
      .then(() => console.log("Service Worker Registered"))
      .catch(err => console.error("Service Worker Failed:", err));
  });
}
