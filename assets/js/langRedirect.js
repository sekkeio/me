document.addEventListener('DOMContentLoaded', function() {
    const userLang = navigator.language || navigator.userLanguage; 
    const redirected = localStorage.getItem('redirected');
    
    if (!redirected) {
        localStorage.setItem('redirected', 'true');
        setTimeout(() => {
            if (userLang.startsWith('ru')) {
                window.location.href = '/'; 
            } else {
                window.location.href = '/en'; 
            }
        }, 300);
    }
});
