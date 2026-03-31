import { storeToRefs } from 'pinia'
import { useLocaleStore } from '@/stores'

export function useLocale() {
  const store = useLocaleStore()
  const { currentLocale } = storeToRefs(store)
  return {
    currentLocale,
    t: store.t,
    setLocale: store.setLocale,
  }
}
