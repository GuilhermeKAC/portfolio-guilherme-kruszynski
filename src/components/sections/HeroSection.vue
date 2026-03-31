<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { useLocale } from '@/composables/useLocale'
import { CONTACT } from '@/utils/constants'
import AppButton from '@/components/ui/AppButton.vue'
import profileImg from '@/assets/images/profile-placeholder.jpg'

const { t } = useLocale()
const heroRef = ref<HTMLElement | null>(null)

onMounted(async () => {
  if (!heroRef.value) return

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.fromTo('.hero-meta',    { opacity: 0, y: -8  }, { opacity: 1, y: 0, duration: 0.5 })
    .fromTo('.hero-lastname', { opacity: 0, x: -24 }, { opacity: 1, x: 0, duration: 0.7 }, '-=0.2')
    .fromTo('.hero-footer',   { opacity: 0, y: 8   }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
})
</script>

<template>
  <section
    id="hero"
    ref="heroRef"
    class="min-h-screen flex items-center bg-bg"
  >
    <div class="app-container grid grid-cols-1
                               lg:grid-cols-2 gap-16 items-center">

      <!-- Coluna de texto -->
      <div class="hero-meta flex flex-col gap-10">
        <div class="flex flex-col">
          <span class="text-mono text-muted mb-8">
            São José dos Campos, SP · 2026
          </span>

          <h1 class="heading-display" style="padding-bottom: 1.5rem">
            Guilherme<br>Kruszynski
          </h1>

          <p class="label-mono">
            {{ t('hero.role') }} · PHP · Laravel · PostgreSQL
          </p>
        </div>

        <div class="hero-footer flex flex-wrap items-center gap-10 mt-4">
          <AppButton as="a" :href="`mailto:${CONTACT.email}`" variant="link">
            {{ t('hero.cta') }}
            <svg class="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </AppButton>

          <div class="flex items-center gap-6">
            <AppButton as="a" :href="CONTACT.linkedin" target="_blank" variant="link" class="text-muted hover:text-fg">
              LinkedIn
            </AppButton>
            <AppButton as="a" :href="CONTACT.github" target="_blank" variant="link" class="text-muted hover:text-fg">
              GitHub
            </AppButton>
          </div>
        </div>
      </div>

      <!-- Coluna da foto -->
      <div class="relative flex justify-end items-center">
        <img
          :src="profileImg"
          alt="Guilherme Kruszynski"
          class="w-full max-w-xs md:max-w-sm object-cover object-top"
          style="
            height: clamp(400px, 60vh, 600px);
            mask-image: linear-gradient(
              to bottom,
              transparent 0%,
              black 12%,
              black 75%,
              transparent 100%
            );
            -webkit-mask-image: linear-gradient(
              to bottom,
              transparent 0%,
              black 12%,
              black 75%,
              transparent 100%
            );
          "
        />
      </div>

    </div>
  </section>
</template>
