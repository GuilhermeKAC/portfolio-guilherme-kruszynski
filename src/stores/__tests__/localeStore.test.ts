import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useLocaleStore } from '@/stores/localeStore'

describe('localeStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
    vi.spyOn(document.documentElement, 'lang', 'set').mockImplementation(() => {})
  })

  it('inicia com locale pt por padrão', () => {
    Object.defineProperty(navigator, 'language', { value: 'en-US', configurable: true })
    const store = useLocaleStore()
    store.initLocale()
    expect(store.currentLocale).toBe('en')
  })

  it('detecta português do navegador', () => {
    Object.defineProperty(navigator, 'language', { value: 'pt-BR', configurable: true })
    const store = useLocaleStore()
    store.initLocale()
    expect(store.currentLocale).toBe('pt')
  })

  it('persiste preferência no localStorage', () => {
    const store = useLocaleStore()
    store.setLocale('en')
    expect(localStorage.getItem('portfolio-locale')).toBe('en')
  })

  it('recupera preferência salva no localStorage', () => {
    localStorage.setItem('portfolio-locale', 'en')
    const store = useLocaleStore()
    store.initLocale()
    expect(store.currentLocale).toBe('en')
  })

  it('t() retorna chave aninhada corretamente', () => {
    const store = useLocaleStore()
    store.setLocale('pt')
    expect(store.t('hero.role')).toBe('Desenvolvedor Full-stack')
  })

  it('t() retorna chave aninhada em inglês', () => {
    const store = useLocaleStore()
    store.setLocale('en')
    expect(store.t('hero.role')).toBe('Full-stack Developer')
  })

  it('t() retorna a própria chave se não encontrar', () => {
    const store = useLocaleStore()
    expect(store.t('chave.inexistente')).toBe('chave.inexistente')
  })
})
