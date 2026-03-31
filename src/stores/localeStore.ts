import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Locale, LocaleMessages } from '@/types'
import pt from '@/locales/pt.json'
import en from '@/locales/en.json'

const messages: Record<Locale, LocaleMessages> = { pt, en }

// Navega em objeto aninhado por dot notation: 'hero.role' → messages.hero.role
function getNestedValue(obj: Record<string, unknown>, path: string): string {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object') return (acc as Record<string, unknown>)[key]
    return undefined
  }, obj) as string ?? path
}

export const useLocaleStore = defineStore('locale', () => {
  const currentLocale = ref<Locale>('pt')

  const localeMessages = computed(() => messages[currentLocale.value])

  function t(key: string): string {
    return getNestedValue(localeMessages.value as unknown as Record<string, unknown>, key)
  }

  function setLocale(locale: Locale) {
    currentLocale.value = locale
    localStorage.setItem('portfolio-locale', locale)
    document.documentElement.lang = locale
  }

  function initLocale() {
    const saved = localStorage.getItem('portfolio-locale') as Locale | null
    if (saved && (saved === 'pt' || saved === 'en')) {
      setLocale(saved)
      return
    }
    const browserLang = navigator.language.toLowerCase()
    setLocale(browserLang.startsWith('pt') ? 'pt' : 'en')
  }

  return { currentLocale, t, setLocale, initLocale }
})
