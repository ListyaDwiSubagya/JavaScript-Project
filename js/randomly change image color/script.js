const divElem = document.getElementById("divID");

function randomcolor() {
    return Math.floor(Math.random() * 256); // 256 instead of 255 to include the full range from 0 to 255
}

divElem.addEventListener('click', () => {
    divElem.style.backgroundColor = `rgba(${randomcolor()}, ${randomcolor()}, ${randomcolor()}, 1)`; // Fixed string interpolation and added alpha value
});
