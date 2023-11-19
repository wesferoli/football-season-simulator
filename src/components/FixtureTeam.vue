<script setup lang="ts">
import TeamLogo from './TeamLogo.vue'

type FixtureTeamProps = {
  teamName: string
  teamLogo: string
  playsAt: 'home' | 'away'
}

const { playsAt } = defineProps<FixtureTeamProps>()

const flexDirection = playsAt === 'home' ? 'row' : 'row-reverse'
const horizontalAlign = playsAt === 'home' ? 'right' : 'left'
</script>

<template>
  <div class="fixture-team">
    <span :title="teamName">{{ teamName }}</span>
    <TeamLogo :src="teamLogo" :alt="`${teamName} logo`" size="1.75em" />
  </div>
</template>

<style scoped lang="scss">
.fixture-team {
  display: flex;
  align-items: center;
  justify-content: v-bind(horizontalAlign);
  flex-direction: v-bind(flexDirection);
  gap: 5px;
  flex: 1;
  min-width: 0;
  font-size: $text-xs;

  @media (min-width: $screen-sm) {
    font-size: $text-md;
  }

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 500;
  }
}
</style>
