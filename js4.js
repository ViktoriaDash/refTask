document.querySelectorAll('.list-style').forEach(item => {
    item.addEventListener('click', (event) => {
        if (event.ctrlKey || event.metaKey) {

            item.classList.toggle('selected');
        } else {

            document.querySelectorAll('.list-style').forEach(el => el.classList.remove('selected'));
            item.classList.add('selected');
        }
    });
});