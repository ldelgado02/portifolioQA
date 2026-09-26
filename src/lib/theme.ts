// Dark is the default register; light is stored only when the visitor picks it.
const STORAGE_KEY = "theme";

// Runs inline in <head> before first paint so a saved light theme never flashes dark.
export const themeInitScript = `(function(){try{if(localStorage.getItem("${STORAGE_KEY}")==="light")document.documentElement.setAttribute("data-theme","light")}catch(e){}})()`;

export function toggleTheme() {
  const root = document.documentElement;
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";

  if (next === "light") root.setAttribute("data-theme", "light");
  else root.removeAttribute("data-theme");

  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Storage can be blocked (private mode); the toggle still works for this visit.
  }
}
