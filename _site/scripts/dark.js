const isDark = localStorage.getItem("Dark Mode") === 'true';
const currentURL = window.location.search;

const homeCity = (localStorage.getItem("home") != null) ? localStorage.getItem("home"):"waterford";
currentURL ? null : window.location.href = `/?focus_city=${homeCity}&day=today`;

(function() {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
})();


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[id^=colorMode]").forEach(indicator => {
        indicator.addEventListener('click', () => {
            const isDark = localStorage.getItem("Dark Mode") === 'true';
            localStorage.setItem("Dark Mode", !isDark);
            document.documentElement.setAttribute('data-theme', !isDark ? 'dark' : 'light');
            const colorModeIndicator = document.getElementById("colorModeIndicator");
            colorModeIndicator.classList = !isDark ? "fa-regular fa-moon" : "fa-regular fa-sun";
        })
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        const colorModeIndicator = document.getElementById("colorModeIndicator");
        colorModeIndicator.classList = isDark ? "fa-regular fa-moon" : "fa-regular fa-sun";
    });
})