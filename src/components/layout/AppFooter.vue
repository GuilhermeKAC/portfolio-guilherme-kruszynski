<script setup lang="ts">
import { CONTACT } from '@/utils/constants'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-midnight-border bg-midnight py-12">
    <div class="max-w-[1800px] mx-auto px-4 md:px-8 lg:px-16 2xl:px-24 flex flex-col sm:flex-row items-center justify-between gap-3">
      <span class="font-display font-black text-fg text-lg">GK</span>
      <span class="font-mono text-xs text-muted">
        © {{ year }} · {{ CONTACT.email }}
      </span>
    </div>
  </footer>
</template>
