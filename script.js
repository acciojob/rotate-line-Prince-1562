//your JS code here. If required.
// script.js
const line = document.getElementById('line');
let angle = 0;
const rotationSpeed = 2; // Degrees to rotate each interval
const intervalTime = 20; // Milliseconds between rotations

function rotateLine() {
    angle += rotationSpeed;
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}

setInterval(rotateLine, intervalTime);