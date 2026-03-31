<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'

const { currentLocale, setLocale } = useLocale()
</script>

<template>
  <div class="flex items-center gap-1">
    <button
      :class="[
        'px-2 py-1 text-sm font-mono rounded transition-colors',
        currentLocale === 'pt' ? 'bg-accent text-white' : 'text-muted hover:text-fg',
      ]"
      @click="setLocale('pt')"
    >
      PT
    </button>
    <span class="text-border text-sm">|</span>
    <button
      :class="[
        'px-2 py-1 text-sm font-mono rounded transition-colors',
        currentLocale === 'en' ? 'bg-accent text-white' : 'text-muted hover:text-fg',
      ]"
      @click="setLocale('en')"
    >
      EN
    </button>
  </div>
</template>
