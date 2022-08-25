
import i18n from "i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from "i18next-browser-languagedetector";
import en from './en.json'
import fr from './fr.json'

import { initReactI18next } from "react-i18next";

// add other languages if needed
// check the translations/language.json format
export const resources = {
  en,
  fr
} as const

// or create another list of languages with a custom label if needed
export const availableLanguages = Object.keys(resources) as string[]

// initialize translation
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    debug:true
  });

export default i18n
