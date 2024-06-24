import { createI18n } from 'vue-i18n'
import enLocale from './locales/en.json'
import plLocale from './locales/pl.json'

const i18n = createI18n({
	locale: 'pl',
	globalInjection: true,
	messages: {
		en: { ...enLocale },
		pl: { ...plLocale },
	},
})

export default i18n
