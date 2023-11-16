<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import { leagueTable } from './utils/mockData'
import LeagueTable from './components/LeagueTable.vue'
</script>

<template>
  <AppHeader />

  <main class="main-container">
    <LeagueTable
      :standings="
        leagueTable[0].league.standings[0].slice(0, leagueTable[0].league.standings[0].length / 2)
      "
    />
    <LeagueTable
      :standings="
        leagueTable[0].league.standings[0].slice(leagueTable[0].league.standings[0].length / 2)
      "
    />
  </main>
</template>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10vh 8vw;
  gap: 20px;

  min-height: $body-height;
}
</style>
