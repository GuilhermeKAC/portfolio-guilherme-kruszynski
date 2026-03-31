<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useLocale } from '@/composables/useLocale'
import TimelineItem from '@/components/ui/TimelineItem.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import type { Experience } from '@/types'

const { t } = useLocale()
const sectionRef = ref<HTMLElement | null>(null)

const items = computed<Experience[]>(() => t('experience.items') as unknown as Experience[])

onMounted(async () => {
  const { fadeInUp } = await import('@/composables/useAnimation')
  if (sectionRef.value) fadeInUp(sectionRef.value)
})
</script>

<template>
  <section id="experience" ref="sectionRef" class="py-40 bg-midnight w-full">
    <div class="w-full px-8 md:px-16 lg:px-24">
      <SectionHeading number="01" :title="t('experience.title')" />

      <div class="w-full">
        <TimelineItem
          v-for="(item, index) in items"
          :key="item.company"
          :item="item"
          :force-expanded="index === 0"
        />
      </div>
    </div>
  </section>
</template>
