let block = document.getElementById('block');
let sq = document.querySelectorAll('.sq');

sq.forEach(square => {
    square.onmousedown = function(event) {
        let shiftX = event.clientX - square.getBoundingClientRect().left;
        let shiftY = event.clientY - square.getBoundingClientRect().top;

        square.style.position = 'absolute';
        square.style.zIndex = 1000;

        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
            let blockRect = block.getBoundingClientRect();
            let squareRect = square.getBoundingClientRect();

            let posX = getValidPosition(pageX - shiftX, blockRect.left, blockRect.right - squareRect.width);
            let posY = getValidPosition(pageY - shiftY, blockRect.top, blockRect.bottom - squareRect.height);

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

function getValidPosition(position, min, max) {
    if (position < min) return min;
    if (position > max) return max;
    return position;
}
