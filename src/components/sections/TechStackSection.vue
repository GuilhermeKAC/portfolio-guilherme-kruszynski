<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useLocale } from '@/composables/useLocale'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import { TECH_CATEGORIES } from '@/utils/constants'

const { t } = useLocale()
const sectionRef = ref<HTMLElement | null>(null)

const stack = Object.entries(TECH_CATEGORIES).map(([label, items]) => ({ label, items }))

onMounted(async () => {
  const { fadeInUp } = await import('@/composables/useAnimation')
  if (sectionRef.value) fadeInUp(sectionRef.value)
})
</script>

<template>
  <section id="skills" ref="sectionRef" class="app-section bg-midnight-soft">
    <div class="section-container">
      <SectionHeading :title="t('techStack.title')" />

      <div class="divide-y divide-midnight-border">
        <div
          v-for="category in stack"
          :key="category.label"
          class="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-10 lg:gap-16 py-10 first:pt-0 last:pb-0"
        >
          <span class="text-mono text-muted lg:pt-1">
            {{ category.label }}
          </span>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="tech in category.items"
              :key="tech"
              class="interactive-element text-mono text-[10px] px-3 py-1.5
                     border border-midnight-border bg-midnight-card text-muted
                     hover:border-muted hover:text-fg cursor-default"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
