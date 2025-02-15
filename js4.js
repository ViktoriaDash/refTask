const listItems = document.querySelectorAll('.list-style');

listItems.forEach(item => {
    item.addEventListener('click', (event) => {
        if (event.ctrlKey || event.metaKey) {
            item.classList.toggle('selected');
        } else {
            listItems.forEach(el => el.classList.remove('selected'));
            item.classList.add('selected');
        }
    });
});
