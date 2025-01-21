const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const url = this.href;
        this.classList.add('hover');
        setTimeout(() => {
            window.location.href = url;
        }, 500);
    });
});