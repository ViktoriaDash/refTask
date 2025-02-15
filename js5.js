let thumb = slider.querySelector('.thumb');

thumb.onmousedown = function(event) {
    event.preventDefault();

    let shiftX = event.clientX - thumb.getBoundingClientRect().left;


    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    const sliderRect = slider.getBoundingClientRect();
    const rightEdge = slider.clientWidth - thumb.clientWidth;

    function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - sliderRect.left;

        if (newLeft < 0) {
            newLeft = 0;
        }
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
