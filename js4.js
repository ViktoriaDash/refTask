document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.querySelector('.list-container');

    listContainer.addEventListener('click', (event) => {
        const item = event.target.closest('.list-style');
        if (!item) return;

        if (event.ctrlKey || event.metaKey) {
            item.classList.toggle('selected');
        } else {
            document.querySelector('.list-style.selected')?.classList.remove('selected');
            item.classList.add('selected');
        }
    });
});
