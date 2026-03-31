<script setup lang="ts">
defineProps<{ number?: string; title: string }>()
</script>

<template>
  <div class="flex flex-col gap-6 mb-16 lg:mb-24">
    <div v-if="number" class="flex items-center gap-4">
      <span class="text-mono text-muted">
        — {{ number }} /
      </span>
      <div class="flex-1 h-px bg-midnight-border opacity-20" />
    </div>
    <h2 class="heading-lg">
      {{ title }}
    </h2>
  </div>
</template>
