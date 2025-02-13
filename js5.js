let thumb = slider.querySelector('.thumb');

thumb.addEventListener('mousedown', onMouseDown);
thumb.addEventListener('dragstart', (event) => event.preventDefault());

function onMouseDown(event) {
    event.preventDefault();

    let shiftX = event.clientX - thumb.getBoundingClientRect().left;

    function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

        newLeft = Math.max(0, Math.min(newLeft, slider.clientWidth - thumb.clientWidth));

        thumb.style.left = `${newLeft}px`;
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
}
