// Theme toggle functionality
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const themeDropdown = document.getElementById("themeDropdown");
  const themeOptions = document.querySelectorAll(".theme-option");
  const htmlElement = document.documentElement;

  // Function to set theme
  function setTheme(theme) {
    if (theme === "dark") {
      htmlElement.classList.add("dark");
    } else if (theme === "light") {
      htmlElement.classList.remove("dark");
    } else if (theme === "system") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        htmlElement.classList.add("dark");
      } else {
        htmlElement.classList.remove("dark");
      }
    }

    // Save preference
    localStorage.setItem("theme", theme);
  }

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme") || "system";

  // Apply saved theme or system preference
  setTheme(savedTheme);

  // Toggle dropdown when icon is clicked
  themeToggle.addEventListener("click", () => {
    themeDropdown.classList.toggle("hidden");
  });

  // Apply selected theme when an option is clicked
  themeOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const theme = option.getAttribute("data-theme");
      setTheme(theme);
      themeDropdown.classList.add("hidden");
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (event) => {
    const isClickInside =
      themeToggle.contains(event.target) ||
      themeDropdown.contains(event.target);

    if (!isClickInside && !themeDropdown.classList.contains("hidden")) {
      themeDropdown.classList.add("hidden");
    }
  });

  // Listen for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (localStorage.getItem("theme") === "system") {
        if (e.matches) {
          htmlElement.classList.add("dark");
        } else {
          htmlElement.classList.remove("dark");
        }
      }
    });
});
