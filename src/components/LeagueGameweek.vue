<script async setup lang="ts">
import LeagueMatch from './LeagueMatch.vue'
import { useStore } from '@/vuex/store'
import { computed } from 'vue'

const store = useStore()
const fixtures = computed(() => store.state.fixtures)
const roundNumber = computed(() => fixtures.value[0]?.league.round.slice(-2))
</script>

<template>
  <div class="gameweek-container">
    <nav>
      <font-awesome-icon icon="fa-solid fa-circle-arrow-left" class="icon arrow-left" />
      <span>rodada {{ roundNumber }}</span>
      <font-awesome-icon icon="fa-solid fa-circle-arrow-right" class="icon arrow-right" />
    </nav>
    <ul class="fixture-container">
      <li class="fixture" v-for="match in fixtures" :key="match.fixture.id">
        <LeagueMatch :match="match" />
      </li>
    </ul>
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

  .fixture-container {
    padding-left: 0;

    .fixture:first-child {
      border: none;
      padding-top: 0;
    }
    .fixture:last-child {
      padding-bottom: 0;
    }
    .fixture {
      list-style: none;
      border-top: solid 1px $grey-300;
      padding-top: 8px;
      padding-bottom: 8px;
    }
  }
}
</style>
