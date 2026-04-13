<script setup lang="ts">
defineProps<{ number?: string; title: string }>()
</script>

<template>
  <div class="mb-8 md:mb-14 lg:mb-20">
    <div class="flex items-center gap-5 mb-5 md:mb-8">
      <span class="label-mono" v-if="number">— {{ number }} /</span>
      <div class="flex-1 h-px" style="background: var(--color-border);
           opacity: 0.4" />
    </div>
    <h2 class="heading-xl">{{ title }}</h2>
  </div>
</template>
