let block = document.getElementById('block')
let  sq = document.querySelectorAll('.sq')

sq.forEach(square =>{
    square.onmousedown = function(event){
        let shiftX = event.clientX - square.getBoundingClientRect().left;
        let shiftY = event.clientY - square.getBoundingClientRect().top;

        square.style.position = 'absolute';
        square.style.zIndex = 1000;

        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY){
            let blockRect = block.getBoundingClientRect();
            let squareRect = square.getBoundingClientRect();

            let posX = pageX - shiftX;
            if(posX < blockRect.left)
                posX = blockRect.left;
            if(posX + squareRect.width > blockRect.right)
                posX = blockRect.right - squareRect.width;

            let posY = pageY - shiftY;
            if (posY < blockRect.top)
                posY = blockRect.top;
            if (posY + squareRect.height > blockRect.bottom)
                posY = blockRect.bottom - squareRect.height;

            square.style.left = posX - blockRect.left + 'px';
            square.style.top = posY - blockRect.top + 'px';
        }
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }
        document.addEventListener('mousemove', onMouseMove);

        square.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            square.onmouseup = null;
        };
    };
    square.ondragstart = function() {
        return false;
    };

});