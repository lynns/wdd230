const loadedDate = document.querySelector("#loadedDate");
loadedDate.value = Date.now();

const main = document.querySelector('main');
let radios = document.querySelectorAll('input[type=radio][name="membershipLevel"]');
radios.forEach(radio => radio.addEventListener('change', function () {
    main.setAttribute('class', this.value);
}));