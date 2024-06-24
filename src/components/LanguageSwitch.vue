<template>
	<div class="flex justify-end mb-4">
		<ul class="flex gap-4">
			<li v-for="lang in languages" :key="lang.value" @click="changeLanguage(lang.value)" :class="[selectedLanguage === lang.value ? 'font-bold text-[#1d5ad1]' : '']" class="cursor-pointer flex items-center gap-2">
				<component :is="lang.icon" class="w-6 h-6"/>
				<span>{{ lang.text }}</span>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import PlIcon from '../assets/icons/PlIcon.vue';
import EnIcon from '../assets/icons/EnIcon.vue';

const { locale, t } = useI18n()
const selectedLanguage = ref(localStorage.getItem('language') || 'pl')

const languages = computed(() => [
	{ value: 'pl', text: t('Polish'), icon: PlIcon },
	{ value: 'en', text: t('English'), icon: EnIcon }
])

const changeLanguage = (lang) => {
	selectedLanguage.value = lang
	locale.value = lang
	localStorage.setItem('language', lang)
}
</script>

