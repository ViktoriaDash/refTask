let block = document.querySelector('.block');
let button = document.querySelector('.bt');


button.addEventListener('mouseover',() =>{
    const blockRect = block.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    let posX, posY;

    do {
        posX = Math.random() * (blockRect.width - buttonRect.width);
        posY = Math.random() * (blockRect.height - buttonRect.height);
    } while (
        posX < 0 || posX > blockRect.width - buttonRect.width ||
        posY < 0 || posY > blockRect.height - buttonRect.height
        );
    button.style.left = `${posX}px`;
    button.style.top = `${posY}px`;
})
