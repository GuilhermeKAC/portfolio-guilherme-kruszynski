<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span class="inline-block px-3 py-1.5 text-sm font-mono bg-bg border border-border text-muted rounded hover:border-accent hover:text-accent hover:scale-105 transition-all cursor-default">
    {{ label }}
  </span>
</template>
