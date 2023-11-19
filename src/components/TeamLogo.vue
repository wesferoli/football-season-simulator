<script setup lang="ts">
type TeamLogoProps = {
  src: string
  alt: string
  size?: string
}

withDefaults(defineProps<TeamLogoProps>(), { size: '1.2em' })
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
