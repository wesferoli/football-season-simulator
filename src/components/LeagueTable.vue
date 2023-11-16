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
          <th>P</th>
          <th>J</th>
          <th>SG</th>
          <th>GP</th>
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
}

.team-rank {
  color: $red-500;
  font-weight: 700;
  width: 20px;
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
}

// cells styling
thead,
tbody {
  th,
  td {
    padding: 5px 8px;
    text-align: center;
    width: 30px;
  }

  th {
    color: $purple-300;
    font-weight: 600;
  }

  th:first-child,
  td:first-child {
    text-align: start;
    width: 250px;
  }

  td:first-child {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  td:nth-child(2) {
    font-weight: 700;
  }
}
</style>
