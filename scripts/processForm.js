//username=Lynn&password=asdfasdf&password2=asdfasdf&email=lynn%40byui.edu&rating=9

const url = new URL(window.location);
const formData = url.searchParams;

document.querySelector("#Username").textContent = formData.get('username');
document.querySelector("#Password").textContent = formData.get('password');
document.querySelector("#Email").textContent = formData.get('email');
document.querySelector("#Rating").textContent = formData.get('rating');