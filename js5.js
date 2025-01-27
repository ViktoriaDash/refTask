let thumb = slider.querySelector('.thumb');

thumb.onmousedown = function(event) {
    event.preventDefault();

    let shiftX = event.clientX - thumb.getBoundingClientRect().left;


    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;


        if (newLeft < 0) {
            newLeft = 0;
        }
        let rightEdge = slider.clientWidth - thumb.clientWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }

        thumb.style.left = newLeft + 'px';
    }

    function onMouseUp() {

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
};


thumb.ondragstart = function() {
    return false;
};
