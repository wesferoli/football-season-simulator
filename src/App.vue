<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import LeagueTable from '@/components/LeagueTable.vue'
import HeroSection from '@/components/HeroSection.vue'
import LeagueGameweek from '@/components/LeagueGameweek.vue'
import { useGameweek } from './composables/useGameweek'
import { leagueTable, matchesRound13 } from './utils/mockData'
import { useTable } from './composables/useTable'
import { useStore } from './vuex/store'
import { watch } from 'vue'

const { data: gameweekFixtures } = useGameweek(matchesRound13)
const { data: leagueStandings } = useTable(leagueTable[0].league.standings[0])
const store = useStore()

watch(gameweekFixtures, () => {
  store.dispatch('storeFixtures', {
    fixtures: gameweekFixtures.value
  })
})
watch(leagueStandings, () => {
  store.dispatch('storeLeagueTable', {
    leagueTable: leagueStandings.value
  })
})
</script>

<template>
  <AppHeader />

  <main class="main-container">
    <section class="hero-section">
      <HeroSection />
    </section>

    <section class="simulation-section">
      <div class="table-container">
        <LeagueTable />
      </div>

      <div class="fixtures-container">
        <LeagueGameweek />
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.main-container {
  padding: 5vh 3vw;
  min-height: $body-height;

  @media (min-width: $screen-sm) {
    padding: 5vh 5vw;
  }

  .simulation-section {
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6svh;

    @media (min-width: $screen-lg) {
      gap: 8svh;
    }

    .table-container {
      display: flex;
      flex: 1;
      max-width: 430px;

      @media (min-width: $screen-lg) {
        justify-content: right;
      }
    }

    .fixtures-container {
      display: flex;
      justify-content: center;
      align-items: start;
      flex: 1;
      max-width: 430px;

      @media (min-width: $screen-lg) {
        justify-content: left;
      }
    }
  }
}
</style>
