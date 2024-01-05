const date = new Date();
const yearString = date.toLocaleDateString('en-US', {
    year: 'numeric'
});
const dateString = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
});
document.querySelector("#copyrightYear").innerHTML = yearString;
document.querySelector("#lastModified").innerHTML = `Last Modified: ${dateString}`;