const slider = document.querySelector('.slider');
const thumb = document.querySelector('.thumb');

thumb.addEventListener('mousedown', onMouseDown);

function onMouseDown(e) {
    e.preventDefault();

    const shiftX = e.clientX - thumb.getBoundingClientRect().left;

    document.addEventListener('mousemove', (e) => onMouseMove(e, shiftX));
    document.addEventListener('mouseup', onMouseUp);
}

function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}

function onMouseMove(e, shiftX) {
    const newLeft = Math.max(0, Math.min(slider.clientWidth - thumb.clientWidth, e.clientX - shiftX - slider.getBoundingClientRect().left));
    thumb.style.left = newLeft + 'px';
}


thumb.addEventListener("dragstart", () =>  false);
