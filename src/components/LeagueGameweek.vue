<script setup lang="ts">
import { FixturesKey } from '@/types/symbols'
import { inject } from 'vue'
import LeagueMatch from '@/components/LeagueMatch.vue'

const fixtures = inject(FixturesKey, [])
</script>

<template>
  <div class="gameweek-container">
    <nav>
      <font-awesome-icon icon="fa-solid fa-circle-arrow-left" class="icon arrow-left" />
      <span>rodada {{ fixtures[0].league.round.slice(-2) }}</span>
      <font-awesome-icon icon="fa-solid fa-circle-arrow-right" class="icon arrow-right" />
    </nav>
    <LeagueMatch />
  </div>
</template>

<style scoped lang="scss">
.gameweek-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;

    border-bottom: 1px solid $grey-300;
    border-top: 1px solid $grey-300;
    padding: 5px 5px;

    span {
      text-align: center;
      text-transform: uppercase;
      font-size: $text-xs;
      font-weight: 600;
      color: $purple-300;

      @media (min-width: $screen-sm) {
        font-size: $text-md;
      }
    }

    .icon {
      font-size: $text-lg;
      color: $purple-300;

      cursor: pointer;
    }
  }
}
</style>
