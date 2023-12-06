<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import { leagueTable, matchesRound12, matchesRound13, type TeamStanding } from '@/utils/mockData'
import LeagueTable from '@/components/LeagueTable.vue'
import HeroSection from '@/components/HeroSection.vue'
import LeagueGameweek from '@/components/LeagueGameweek.vue'
import { ref } from 'vue'

const leagueStandings = ref<TeamStanding[]>(leagueTable[0].league.standings[0])
</script>

<template>
  <AppHeader />

  <main class="main-container">
    <section class="hero-section">
      <HeroSection />
    </section>

    <section class="simulation-section">
      <div class="table-container">
        <LeagueTable :standings="leagueStandings" />
      </div>

      <div class="fixtures-container">
        <LeagueGameweek :fixtures="matchesRound12" />
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
