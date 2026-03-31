<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useLocale } from '@/composables/useLocale'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import type { Achievement } from '@/types'

const { t } = useLocale()
const sectionRef = ref<HTMLElement | null>(null)

const items = computed<Achievement[]>(() => t('achievements.items') as unknown as Achievement[])

onMounted(async () => {
  const { fadeInUp } = await import('@/composables/useAnimation')
  if (sectionRef.value) fadeInUp(sectionRef.value)
})
</script>

<template>
  <section ref="sectionRef" class="app-section bg-midnight-soft">
    <div class="section-container">
      <SectionHeading :title="t('achievements.title')" />

      <div class="divide-y divide-midnight-border">
        <div
          v-for="item in items"
          :key="item.metric"
          class="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 py-14 first:pt-0 last:pb-0"
        >
          <!-- Métrica grande à esquerda -->
          <div class="flex flex-col justify-center">
            <span class="heading-lg text-accent">
              {{ item.metric }}
            </span>
          </div>

          <!-- Descrição à direita -->
          <div class="flex items-center">
            <p class="text-body text-muted max-w-2xl">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
