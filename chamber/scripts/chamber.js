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