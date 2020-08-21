import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import englishTranslations from './en.json'
import spanishTranslations from './es.json'

const resources = {
  en: { translation: englishTranslations },
  es: { translation: spanishTranslations },
}

i18n
  .use(initReactI18next) // pasamos i18n hacia to react-i18next (los usaremos mediante Hooks)
  .init({
    resources,
    lng: 'es',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
