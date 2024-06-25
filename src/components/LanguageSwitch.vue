<template>
    <div class="flex justify-end mb-4">
        <ul class="flex gap-4">
            <li v-for="lang in languages" :key="lang.value" @click="onChangeLanguage(lang.value)" :class="[selectedLanguage === lang.value ? 'font-bold text-[#1d5ad1]' : '']" class="cursor-pointer flex items-center gap-2">
                <component :is="lang.icon" class="w-6 h-6"/>
                <span>{{ lang.text }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { selectedLanguage, changeLanguage } from '../stores/languageStore';
import PlIcon from '../assets/icons/PlIcon.vue';
import EnIcon from '../assets/icons/EnIcon.vue';

const { locale, t } = useI18n();

const languages = computed(() => [
    { value: 'pl', text: t('Polish'), icon: PlIcon },
    { value: 'en', text: t('English'), icon: EnIcon }
]);

const onChangeLanguage = (lang) => {
    changeLanguage(lang, locale);
};
</script>
