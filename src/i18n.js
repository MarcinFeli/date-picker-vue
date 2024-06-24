import { createI18n } from 'vue-i18n'
import enLocale from './locales/en.json'
import plLocale from './locales/pl.json'

const userLocale = localStorage.getItem('language') || 'pl'
const i18n = createI18n({
	legacy: false,
	locale: userLocale,
	globalInjection: true,
	messages: {
		en: { ...enLocale },
		pl: { ...plLocale },
	},
})

export default i18n
