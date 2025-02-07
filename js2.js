let block = document.getElementById("block");
let circles = [];
let quantity = 10;
let index = 0;

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < quantity; i++) {
    let circle = document.createElement("div");
    let radius = getRandom(10, 30);
    
    circle.classList.add("circle");
    circle.style.width = `${radius * 2}px`;
    circle.style.height = `${radius * 2}px`;
    circle.style.position = "absolute"; // Ensuring correct positioning
    circle.style.backgroundColor = `hsl(${getRandom(0, 360)}, 80%, 60%)`;
    circle.style.left = `${getRandom(0, block.clientWidth - radius * 2)}px`;
    circle.style.top = `${getRandom(0, block.clientHeight - radius * 2)}px`;

    if (i === index) circle.classList.add("active");
    circles.push(circle);
    block.appendChild(circle);
}

function updateCircle() {
    circles.forEach((circle, i) => {
        circle.classList.toggle("active", i === index);
    });
}

function moveC(Cx, Cy) {
    const activeCircle = circles[index];
    const rect = activeCircle.getBoundingClientRect();
    const blockRect = block.getBoundingClientRect();

    let newL = rect.left - blockRect.left + Cx;
    let newT = rect.top - blockRect.top + Cy;

    newL = Math.max(0, Math.min(newL, block.clientWidth - activeCircle.offsetWidth));
    newT = Math.max(0, Math.min(newT, block.clientHeight - activeCircle.offsetHeight));

    activeCircle.style.left = `${newL}px`;
    activeCircle.style.top = `${newT}px`;
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        e.preventDefault();
        index = e.shiftKey ? (index - 1 + quantity) % quantity : (index + 1) % quantity;
        updateCircle();
    } else if (e.key === "ArrowRight") {
        moveC(10, 0);
    } else if (e.key === "ArrowLeft") {
        moveC(-10, 0);
    } else if (e.key === "ArrowUp") {
        moveC(0, -10);
    } else if (e.key === "ArrowDown") {
        moveC(0, 10);
    }
});
