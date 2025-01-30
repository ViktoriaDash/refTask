let block = document.querySelector('.block');
let button = document.querySelector('.bt');

button.addEventListener('mouseover', moveButtonRandomly);

function moveButtonRandomly() {
    const blockRect = block.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const posX = Math.random() * (blockRect.width - buttonRect.width);
    const posY = Math.random() * (blockRect.height - buttonRect.height);

    button.style.left = `${posX}px`;
    button.style.top = `${posY}px`;
}