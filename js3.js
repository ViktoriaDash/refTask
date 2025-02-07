let block = document.querySelector('.block');
let button = document.querySelector('.bt');


button.style.position = 'absolute';

button.addEventListener('mouseover', () => {
    const blockRect = block.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    let posX = Math.random() * (blockRect.width - buttonRect.width);
    let posY = Math.random() * (blockRect.height - buttonRect.height);

    button.style.left = `${posX}px`;
    button.style.top = `${posY}px`;
});
