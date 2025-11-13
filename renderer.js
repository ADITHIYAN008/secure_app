const webview = document.getElementById("webview");
const input = document.getElementById("address");
const goBtn = document.getElementById("go");

// Disable right-click
window.addEventListener("contextmenu", (e) => e.preventDefault());

goBtn.addEventListener("click", () => {
  const query = input.value.trim();
  if (!query) return;

  // If it looks like a URL, load it directly; otherwise search Google
  let url = query.startsWith("http")
    ? query
    : `https://www.google.com/search?q=${encodeURIComponent(query)}`;

  // Send it to main process
  window.secureAPI.openUrl(url);
});

// Receive navigation request from main process
window.secureAPI.onNavigate((url) => {
  webview.loadURL(url);
});
