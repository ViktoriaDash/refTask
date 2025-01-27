let block = document.getElementById("block");
let circles = [];
let quantity = 10;
let Index = 0;


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


for (let i = 0; i < quantity; i++) {
    let circle = document.createElement("div");
    let radius = getRandom(10, 30);
    circle.classList.add("circle");
    circle.style.width = `${radius * 2}px`;
    circle.style.height = `${radius * 2}px`;
    circle.style.backgroundColor = `hsl(${getRandom(0, 360)}, 80%, 60%)`;
    circle.style.left = `${getRandom(0, block.clientWidth - radius * 2)}px`;
    circle.style.top = `${getRandom(0, block.clientHeight - radius * 2)}px`;

    if (i === Index) circle.classList.add("active");
    circles.push(circle);
    block.appendChild(circle);
}


function updateCircle() {
    circles.forEach((circle, index) => {
        circle.classList.toggle("active", index === Index);
    });
}


function moveC(Cx, Cy) {
    const activeCircle = circles[Index];
    const radius = activeCircle.offsetWidth / 2;
    let newL = parseInt(activeCircle.style.left) + Cx;
    let newT = parseInt(activeCircle.style.top) + Cy;


    newL = Math.max(0, Math.min(newL, block.clientWidth - radius * 2));
    newT = Math.max(0, Math.min(newT, block.clientHeight - radius * 2));

    activeCircle.style.left = `${newL}px`;
    activeCircle.style.top = `${newT}px`;
}


document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        e.preventDefault();
        if (e.shiftKey) {

            Index = (Index - 1 + quantity) % quantity;
        } else {

            Index = (Index + 1) % quantity;
        }
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
