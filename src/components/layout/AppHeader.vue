<script setup lang="ts">
import { ref } from 'vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
const menuOpen = ref(false)

const navLinks = [
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.skills',     href: '#skills' },
  { key: 'nav.education',  href: '#education' },
  { key: 'nav.contact',    href: '#contact' },
]

function closeMenu() { menuOpen.value = false }
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 h-16 bg-midnight/80 backdrop-blur-md">
    <div class="max-w-[1800px] mx-auto px-5 md:px-8 lg:px-16 2xl:px-24 h-full flex items-center justify-between">

      <!-- Logo -->
      <a href="#" class="font-display font-black text-sm text-fg tracking-widest">GK</a>

      <!-- Nav desktop -->
      <nav class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.key"
          :href="link.href"
          class="font-mono text-xs uppercase tracking-widest text-muted hover:text-fg transition-colors relative group"
        >
          {{ t(link.key) }}
          <span class="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all group-hover:w-full" />
        </a>
      </nav>

      <!-- Direita: idioma + botão contato -->
      <div class="flex items-center gap-4">
        <LanguageSwitcher />
        <a
          href="#contact"
          class="hidden md:inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-fg border border-midnight-border px-3 py-1.5 hover:border-accent hover:text-accent transition-colors"
        >
          {{ t('nav.contact') }}
          <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>

        <!-- Hamburger mobile -->
        <button
          class="md:hidden p-2 text-fg"
          :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'"
          @click="menuOpen = !menuOpen"
        >
          <svg v-if="!menuOpen" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Nav mobile -->
    <nav v-if="menuOpen" class="md:hidden border-t border-midnight-border bg-midnight px-4 py-5 flex flex-col gap-5">
      <a
        v-for="link in navLinks"
        :key="link.key"
        :href="link.href"
        class="font-mono text-xs uppercase tracking-widest text-muted hover:text-fg transition-colors"
        @click="closeMenu"
      >
        {{ t(link.key) }}
      </a>
    </nav>
  </header>
</template>
