// Get the theme toggle checkbox and the body element
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Listen for changes to the checkbox state
themeToggle.addEventListener('change', function () {
    if (themeToggle.checked) {
        // Switch to dark theme
        body.classList.add('dark-theme');
    } else {
        // Switch to light theme
        body.classList.remove('dark-theme');
    }
});

// Check the initial theme preference (if saved)
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.checked = true;
}

// Save the theme preference when changed
themeToggle.addEventListener('change', function () {
    if (themeToggle.checked) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
