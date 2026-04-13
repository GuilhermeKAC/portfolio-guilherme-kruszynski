<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useLocale } from '@/composables/useLocale'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import SkillBadge from '@/components/ui/SkillBadge.vue'
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
  <section id="skills" ref="sectionRef" class="app-section bg-bg-soft">
    <div class="app-container">
      <SectionHeading :title="t('techStack.title')" />

      <div class="divide-y divide-midnight-border">
        <div
          v-for="category in stack"
          :key="category.label"
          class="grid grid-cols-1 md:grid-cols-[160px_1fr] lg:grid-cols-[180px_1fr] gap-5 md:gap-10 lg:gap-16 py-7 md:py-10 first:pt-0 last:pb-0"
        >
          <span class="label-mono lg:pt-1">
            {{ category.label }}
          </span>
          <div class="flex flex-wrap gap-3">
            <SkillBadge
              v-for="tech in category.items"
              :key="tech"
              :label="tech"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
