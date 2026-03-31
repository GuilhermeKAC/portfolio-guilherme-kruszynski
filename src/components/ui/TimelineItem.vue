<script setup lang="ts">
import type { Experience } from '@/types'

defineProps<{
  item: Experience
  forceExpanded?: boolean
}>()
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16
              py-16 border-b border-midnight-border last:border-b-0">

    <!-- Coluna esquerda: empresa, cargo, período -->
    <div class="flex flex-col gap-3 lg:pt-1">
      <h3
        class="font-display font-bold text-fg"
        style="font-size: 1.35rem; letter-spacing: -0.01em"
      >
        {{ item.company }}
      </h3>
      <span
        class="font-mono text-[11px] tracking-[0.15em] uppercase"
        :class="forceExpanded ? 'text-accent' : 'text-muted'"
      >
        {{ item.role }}
      </span>
      <span class="font-mono text-[11px] tracking-[0.1em] text-muted">
        {{ item.period }}
      </span>
    </div>

    <!-- Coluna direita: descrição + tags -->
    <div class="flex flex-col gap-6">
      <p
        class="font-sans leading-[1.8] text-muted"
        style="font-size: 0.9rem"
      >
        {{ item.description }}
      </p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in item.technologies"
          :key="tech"
          class="font-mono text-[10px] tracking-[0.05em] px-2.5 py-1
                 border border-midnight-border bg-midnight-card text-muted
                 hover:border-muted hover:text-fg transition-colors"
        >
          {{ tech }}
        </span>
      </div>
    </div>

  </div>
</template>
