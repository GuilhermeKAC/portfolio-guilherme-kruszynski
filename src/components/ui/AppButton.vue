<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'ghost' | 'link'
  as?: 'button' | 'a'
  href?: string
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  as: 'button'
})
</script>

<template>
  <component
    :is="as"
    :href="href"
    class="interactive-element text-mono inline-flex items-center justify-center transition-all duration-300 ease-out"
    :class="{
      'bg-primary text-bg px-6 py-3 font-semibold hover:bg-opacity-90': variant === 'primary',
      'border border-midnight-border text-fg px-6 py-3 hover:border-muted': variant === 'ghost',
      'text-accent hover:opacity-70 p-0': variant === 'link'
    }"
  >
    <slot />
  </component>
</template>
