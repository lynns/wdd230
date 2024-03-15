/// Footer updates
const date = new Date();
const yearString = date.toLocaleDateString('en-US', {
    year: 'numeric'
});
document.querySelector("#CopyrightYear").innerHTML = yearString;
document.querySelector("#LastUpdated").innerHTML = document.lastModified;

/// Responsive Menu
const nav = document.querySelector("nav");
const menuButton = document.querySelector("#MenuButton");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("menuOpen");
});


/// Dark Mode Support
const darkModeButton = document.querySelector("#DarkModeButton");
const body = document.querySelector("body");

darkModeButton.addEventListener('click', () => {
    body.classList.toggle("darkMode");
});

// Welcome message
const welcomeMessage = document.querySelector("#WelcomeMessage");

if (welcomeMessage) {
    const now = Date.now();
    if (localStorage.getItem("lastVisit") === null) {
        localStorage.setItem("lastVisit", now);
    }
    const lastVisit = parseInt(localStorage.getItem("lastVisit"), 10);
    let yesterday = new Date();
    yesterday = yesterday.setDate(yesterday.getDate() - 1);

    if (lastVisit == now) {
        welcomeMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else if (lastVisit > yesterday) {
        welcomeMessage.textContent = "Back so soon! Awesome!";
    } else {
        const n = Math.floor((now - lastVisit) / 86400000);
        welcomeMessage.textContent = `You last visited ${n} day${n === 1 ? "" : "s"} ago.`;
    }

    localStorage.setItem("lastVisit", now);
}

function controlBanner() {
    const banner = document.querySelector("#Banner");

    const day = new Date().getDay();
    if (day >= 1 && day <= 3) {
        banner.classList.add("show");
    }

}
controlBanner();
