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
import AchievementsSection from '@/components/sections/AchievementsSection.vue'
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
  <main class="pt-16">
    <HeroSection />
    <div class="section-container">
      <div class="h-px bg-midnight-border opacity-10" />
    </div>
    <TechStackSection />
    <div class="section-container">
      <div class="h-px bg-midnight-border opacity-10" />
    </div>
    <ExperienceSection />
    <div class="section-container">
      <div class="h-px bg-midnight-border opacity-10" />
    </div>
    <AchievementsSection />
    <div class="section-container">
      <div class="h-px bg-midnight-border opacity-10" />
    </div>
    <EducationSection />
    <div class="section-container">
      <div class="h-px bg-midnight-border opacity-10" />
    </div>
    <ContactSection />
  </main>
  <AppFooter />
</template>
