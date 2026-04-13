<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useLocale } from '@/composables/useLocale'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import type { Certification } from '@/types'

const { t } = useLocale()
const sectionRef = ref<HTMLElement | null>(null)

const certifications = computed<Certification[]>(
  () => t('education.certifications.items') as unknown as Certification[],
)

onMounted(async () => {
  const { fadeInUp } = await import('@/composables/useAnimation')
  if (sectionRef.value) fadeInUp(sectionRef.value)
})
</script>

<template>
  <section id="education" ref="sectionRef" class="app-section bg-bg">
    <div class="app-container">
      <SectionHeading number="02" :title="t('education.title')" />

      <!-- Formação principal -->
      <div class="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-10 lg:gap-16
                  py-8 md:py-16 border-b border-midnight-border">
        <div class="flex flex-col gap-2">
          <h3
            class="font-display font-bold text-fg"
            style="font-size: 1.35rem; letter-spacing: -0.01em"
          >
            {{ t('education.degree') }}
          </h3>
          <span class="font-mono text-[11px] tracking-[0.15em] uppercase text-muted">
            {{ t('education.institution') }}
          </span>
          <span class="font-mono text-[11px] tracking-[0.1em] text-muted">
            {{ t('education.period') }} · {{ t('education.location') }}
          </span>
        </div>
        <div>
          <p class="font-mono text-[11px] tracking-[0.2em] uppercase text-muted mb-6">
            {{ t('education.certifications.title') }}
          </p>
          <ul class="flex flex-col gap-4">
            <li
              v-for="cert in certifications"
              :key="cert.name"
              class="grid grid-cols-[16px_1fr] gap-3 items-start"
            >
              <span class="text-accent mt-0.5 text-xs">→</span>
              <span
                class="font-sans leading-[1.6] text-muted"
                style="font-size: 0.875rem"
              >
                {{ cert.name }}
              </span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>
