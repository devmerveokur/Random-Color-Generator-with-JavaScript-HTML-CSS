const button = document.getElementById("button");
const body = document.querySelector("body");
const colorNumber = document.querySelector(".color-number");
const colorCard = document.querySelector(".color-card");

const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgbColor = `rgb(${r},${g},${b})`;
    return rgbColor;
};

generateRandomColor();

const setBackground = () => {
    const newColor = generateRandomColor();
    colorNumber.innerHTML = newColor;
    body.style.backgroundColor = newColor;
    colorCard.style.backgroundColor = newColor;
};

button.addEventListener("click", setBackground);
