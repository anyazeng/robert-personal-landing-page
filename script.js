const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

// check if user's preferred theme is dark mode
const isDarkMode =
  // provided by the browser that allows you to check if a specific media query matches the user's device or environment
  window.matchMedia &&
  // checks if the user prefers a dark color scheme. It's using the prefers-color-scheme media feature which is a part of the CSS Media Queries Level 5 specification
  window.matchMedia("(prefers-color-scheme:dark)").matches;

// Add event listener to the theme toggle button
themeToggle.addEventListener("click", () => {
  // If the dark-mode class is not present, it will be added; if it is present, it will be removed.
  body.classList.toggle("dark-mode");
  updateThemeIcon();
});

// Update theme icon: checks whether the body element has the CSS class dark-mode applied to it. If it does, isDarkMode is set to true; otherwise, it's set to false
function updateThemeIcon() {
  const isDarkMode = body.classList.contains("dark-mode");
  themeIcon.textContent = isDarkMode ? "☀️" : "🌙";
}

//Looks like the code below won't affect the UI/UX presense

// Set the initial theme based on user's preference
setTheme(isDarkMode);

// Set the theme
function setTheme(isDarkMode) {
  if (isDarkMode) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
}
