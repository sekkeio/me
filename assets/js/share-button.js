document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a.site-link-button');
    
    links.forEach(link => {
        try {
            // Добавляем протокол если нужно и парсим URL
            const href = link.href.includes('://') ? link.href : `http://${link.href}`;
            const url = new URL(href);
            
            // Создаем элементы
            const span = document.createElement('span');
            span.className = 'site-link-button-text';
            
            const img = document.createElement('img');
            img.className = 'site-link-button-icon';
            img.src = `https://www.google.com/s2/favicons?domain=${url.hostname}`;
            img.width = 16;
            img.height = 16;
            img.alt = '';
            
            // Переносим текст в span
            const text = document.createTextNode(link.textContent);
            
            // Собираем структуру
            span.appendChild(img);
            span.appendChild(text);
            link.innerHTML = '';
            link.appendChild(span);

        } catch(e) {
            console.error('Error processing link:', link.href);
        }
    });
});