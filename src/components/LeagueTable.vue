<script setup lang="ts">
import { type TeamStanding } from '../utils/mockData'
import TeamLogo from '../components/TeamLogo.vue'

type Props = {
  standings: TeamStanding[]
}

defineProps<Props>()
</script>

<template>
  <div class="card">
    <table>
      <thead>
        <tr>
          <th>Classificação</th>
          <th title="Pontos">P</th>
          <th title="Partidas jogadas">J</th>
          <th title="Saldo de gol">SG</th>
          <th title="Gols marcados">GP</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in standings" :key="item.rank">
          <td>
            <span class="team-rank">{{ item.rank }}</span>
            <TeamLogo :src="item.team.logo" :alt="item.team.name" />{{ item.team.name }}
          </td>
          <td>{{ item.points }}</td>
          <td>{{ item.all.played }}</td>
          <td>{{ item.goalsDiff }}</td>
          <td>{{ item.all.goals.for }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.card {
  border: solid 1px $grey-300;
  border-radius: 10px;
  overflow-x: auto;
  height: fit-content;
  width: 94svw; // set width because flexbox parent

  @media (min-width: $screen-sm) {
    max-width: none;
  }

  .team-rank {
    color: $red-500;
    font-weight: 700;
    min-width: 20px;
  }

  // horizontal lines between rows
  table {
    border-collapse: collapse;
    border: none;
  }
  tr {
    border-top: solid 1px $grey-300;
  }
  thead {
    tr:first-child {
      border: none;
    }
    th {
      background-color: $grey-200;
    }
  }

  // cells styling
  thead,
  tbody {
    font-size: $text-sm;

    @media (min-width: $screen-sm) {
      font-size: $text-md;
    }

    td:nth-child(even) {
      background-color: $grey-200;
    }
    td:nth-child(odd) {
      background-color: $white;
    }

    th,
    td {
      padding: 5px 8px;
      text-align: center;
    }

    th {
      color: $purple-300;
      font-weight: 600;
    }

    th:first-child {
      border-radius: 10px 0 0 0;
    }
    th:last-child {
      border-radius: 0 10px 0 0;
    }

    th:first-child,
    td:first-child {
      text-align: start;
      white-space: nowrap;
      width: 100%;
    }

    // sticky columns
    td:nth-child(2),
    th:nth-child(2) {
      min-width: 35px;
      max-width: 35px;
      position: sticky;
      right: 105px;
    }
    td:nth-child(3),
    th:nth-child(3) {
      min-width: 35px;
      max-width: 35px;
      position: sticky;
      right: 70px;
    }
    td:nth-child(4),
    th:nth-child(4) {
      min-width: 35px;
      max-width: 35px;
      position: sticky;
      right: 35px;
    }
    td:nth-child(5),
    th:nth-child(5) {
      min-width: 35px;
      max-width: 35px;
      position: sticky;
      right: 0;
    }

    th:first-child::-webkit-scrollbar,
    td:first-child::-webkit-scrollbar {
      display: none;
    }

    td:first-child {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    td:nth-child(2) {
      font-weight: 700;
    }
  }
}
</style>
