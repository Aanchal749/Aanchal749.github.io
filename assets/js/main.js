// Remembers the light or dark choice. Safe if storage is blocked.
(function () {
  var root = document.documentElement;
  try { var t = localStorage.getItem("theme"); if (t) root.setAttribute("data-theme", t); } catch (e) {}
  var btn = document.getElementById("theme");
  if (!btn) return;
  btn.addEventListener("click", function () {
    var dark = root.getAttribute("data-theme") === "dark" ||
      (!root.getAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
    var next = dark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();
