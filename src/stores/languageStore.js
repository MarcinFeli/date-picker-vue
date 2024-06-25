import { ref } from 'vue';

export const selectedLanguage = ref(localStorage.getItem('language') || 'pl');

export const changeLanguage = (lang, locale) => {
    selectedLanguage.value = lang;
    locale.value = lang;
    localStorage.setItem('language', lang);
};
