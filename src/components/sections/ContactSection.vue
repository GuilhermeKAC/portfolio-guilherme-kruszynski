<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useLocale } from '@/composables/useLocale'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import { CONTACT } from '@/utils/constants'

const { t } = useLocale()
const sectionRef = ref<HTMLElement | null>(null)
const copied = ref(false)

function copyEmail() {
  navigator.clipboard.writeText(CONTACT.email)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}

onMounted(async () => {
  const { fadeInUp } = await import('@/composables/useAnimation')
  if (sectionRef.value) fadeInUp(sectionRef.value)
})
</script>

<template>
  <section id="contact" ref="sectionRef" class="py-40 bg-midnight-soft">
    <div class="w-full px-8 md:px-16 lg:px-24">
      <SectionHeading number="04" :title="t('contact.title')" />
      <p class="font-sans text-[0.9rem] leading-[1.7] text-muted -mt-16 mb-16">
        {{ t('contact.availability') }}
      </p>

      <dl class="divide-y divide-midnight-border mt-4">

        <div class="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 py-10">
          <dt class="font-mono text-[11px] tracking-[0.2em] uppercase text-muted lg:pt-1">
            Email
          </dt>
          <dd class="flex flex-col gap-2">
            <span class="font-sans text-[0.95rem] text-fg">{{ CONTACT.email }}</span>
            <button
              class="font-mono text-[10px] tracking-[0.1em] uppercase text-muted hover:text-accent transition-colors self-start"
              @click="copyEmail"
            >
              {{ copied ? t('contact.copied') : t('contact.copyEmail') }}
            </button>
          </dd>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 py-10">
          <dt class="font-mono text-[11px] tracking-[0.2em] uppercase text-muted lg:pt-1">
            Telefone
          </dt>
          <dd>
            <a
              :href="`tel:${CONTACT.phone}`"
              class="font-sans text-[0.95rem] text-fg hover:text-accent transition-colors"
            >
              {{ CONTACT.phone }}
            </a>
          </dd>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 py-10">
          <dt class="font-mono text-[11px] tracking-[0.2em] uppercase text-muted lg:pt-1">
            LinkedIn
          </dt>
          <dd>
            <a
              :href="CONTACT.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="font-sans text-[0.95rem] text-fg hover:text-accent transition-colors inline-flex items-center gap-2"
            >
              guilherme-kruszynski
              <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </dd>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 py-10">
          <dt class="font-mono text-[11px] tracking-[0.2em] uppercase text-muted lg:pt-1">
            GitHub
          </dt>
          <dd>
            <a
              :href="CONTACT.github"
              target="_blank"
              rel="noopener noreferrer"
              class="font-sans text-[0.95rem] text-fg hover:text-accent transition-colors inline-flex items-center gap-2"
            >
              GuilhermeKAC
              <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </dd>
        </div>

      </dl>

      <p class="font-mono text-[10px] tracking-[0.1em] uppercase text-muted mt-12">
        <span class="text-accent">·</span> {{ CONTACT.location }}
      </p>
    </div>
  </section>
</template>
