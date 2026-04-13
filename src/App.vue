<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useLocaleStore } from '@/stores'
import { useScroll } from '@/composables/useScroll'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import ProgressBar from '@/components/ui/ProgressBar.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import TechStackSection from '@/components/sections/TechStackSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import EducationSection from '@/components/sections/EducationSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

const localeStore = useLocaleStore()
const { init, destroy } = useScroll()

onMounted(() => {
  localeStore.initLocale()
  init()
})

onUnmounted(() => {
  destroy()
})
</script>

<template>
  <ProgressBar />
  <AppHeader />
  <main style="padding-top: calc(4rem + env(safe-area-inset-top))">
    <HeroSection />
    <div class="app-container">
      <div class="h-px" style="background: var(--color-border);
           opacity: 0.25" />
    </div>
    <TechStackSection />
    <div class="app-container">
      <div class="h-px" style="background: var(--color-border);
           opacity: 0.25" />
    </div>
    <ExperienceSection />
    <div class="app-container">
      <div class="h-px" style="background: var(--color-border);
           opacity: 0.25" />
    </div>
    <EducationSection />
    <div class="app-container">
      <div class="h-px" style="background: var(--color-border);
           opacity: 0.25" />
    </div>
    <ContactSection />
  </main>
  <AppFooter />
</template>
