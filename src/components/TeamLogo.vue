<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string
    alt: string
    size?: string
  }>(),
  { size: '1.2em' }
)
</script>

<template>
  <img :src="src" :alt="alt" class="team-logo" />
</template>

<style>
.team-logo {
  height: v-bind(size);
  width: v-bind(size);
}
</style>
