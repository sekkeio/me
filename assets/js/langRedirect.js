const userLang = navigator.language || navigator.userLanguage;
if (userLang.startsWith('ru')) {
    window.location.href = '/';
} else {
    window.location.href = '/en';
}
