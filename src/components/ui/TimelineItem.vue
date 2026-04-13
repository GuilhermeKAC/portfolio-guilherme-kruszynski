<script setup lang="ts">
import type { Experience } from '@/types'
import SkillBadge from '@/components/ui/SkillBadge.vue'

defineProps<{
  item: Experience
  forceExpanded?: boolean
}>()
</script>

<template>
  <div class="editorial-grid py-14 border-b border-border
              last:border-b-0 first:pt-0">

    <!-- Coluna esquerda -->
    <div class="flex flex-col gap-3 lg:pt-1">
      <h3 class="heading-md">{{ item.company }}</h3>
      <span class="label-mono"
            :style="forceExpanded
              ? 'color: var(--color-accent)'
              : 'color: var(--color-muted)'">
        {{ item.role }}
      </span>
      <span class="label-mono mt-1">{{ item.period }}</span>
    </div>

    <!-- Coluna direita -->
    <div class="flex flex-col gap-6">
      <p class="text-body">{{ item.description }}</p>
      <div class="flex flex-wrap gap-2">
        <SkillBadge
          v-for="tech in item.technologies"
          :key="tech"
          :label="tech"
        />
      </div>
    </div>

  </div>
</template>
