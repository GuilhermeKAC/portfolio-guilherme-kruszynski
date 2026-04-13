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
  <section ref="sectionRef" class="app-section bg-bg-soft">
    <div class="app-container">
      <SectionHeading :title="t('achievements.title')" />

      <div class="divide-y" style="border-color: var(--color-border)">
        <div
          v-for="item in items"
          :key="item.metric"
          class="editorial-grid py-16 first:pt-0 last:pb-0"
        >
          <div class="heading-lg" style="color: var(--color-accent)">
            {{ item.metric }}
          </div>
          <div class="flex items-center">
            <p class="text-body">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
