const elements = {
    textarea: document.querySelector('.board_area'),
    input: document.querySelector('.topic_input')
};

document.addEventListener('DOMContentLoaded', () => {
    for (const key in elements) {
        elements[key].value = localStorage.getItem(key + 'Value') || '';
        elements[key].addEventListener('input', () => {
            localStorage.setItem(key + 'Value', elements[key].value);
        });
    }
});