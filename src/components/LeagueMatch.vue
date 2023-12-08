<script setup lang="ts">
import FixtureTeam from '@/components/FixtureTeam.vue'
import { isMatchFinished } from '@/utils/matchStatus'
import { computed, toRef } from 'vue'
import type { FootballMatch } from '@/utils/mockData'
import { getDate, getTime } from '@/utils/handleDateTime'
import { allowOnlyNumbers } from '@/utils/allowOnlyNumbers'

type LeagueMatchProps = {
  match: FootballMatch
}

const props = defineProps<LeagueMatchProps>()
const match = toRef(props, 'match')

const date = computed(() => {
  return getDate(match.value.fixture.date)
})
const time = computed(() => {
  return getTime(match.value.fixture.date)
})
</script>

<template>
  <div class="match-info">
    <span class="date">{{ date }}</span>
    <span class="stadium" :title="match.fixture.venue.name">{{ match.fixture.venue.name }}</span>
    <span class="time">{{ time }}</span>
  </div>
  <div class="match-result">
    <FixtureTeam
      playsAt="home"
      :teamName="match.teams.home.name"
      :teamLogo="match.teams.home.logo"
    />
    <div class="match-score">
      <span class="home-score" v-if="isMatchFinished(match.fixture.status.short)">{{
        match.goals.home
      }}</span>
      <input
        class="home-score"
        v-else
        type="text"
        inputmode="numeric"
        maxlength="2"
        @input="allowOnlyNumbers"
      />
      <span>-</span>
      <span class="away-score" v-if="isMatchFinished(match.fixture.status.short)">{{
        match.goals.away
      }}</span>
      <input
        class="away-score"
        v-else
        type="text"
        inputmode="numeric"
        maxlength="2"
        @input="allowOnlyNumbers"
      />
    </div>
    <FixtureTeam
      playsAt="away"
      :teamName="match.teams.away.name"
      :teamLogo="match.teams.away.logo"
    />
  </div>
</template>

<style scoped lang="scss">
.match-info {
  display: flex;
  justify-content: center;
  gap: 10px;
  line-height: 1em;

  span {
    font-weight: 700;
    color: $grey-500;
    font-size: $text-xxs;

    @media (min-width: $screen-sm) {
      font-size: $text-xs;
    }
  }

  .date {
    text-align: right;
  }
  .time {
    text-align: left;
  }

  .date,
  .time {
    flex: 1;
  }

  .stadium {
    width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
}

.match-result {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 5px;

  .match-score {
    display: flex;
    padding: 3px 3px;
    background-color: $purple-500;
    border-radius: 5px;
    gap: 3px;

    span {
      font-weight: 700;
      color: $green-500;
      text-align: center;
      font-size: $text-sm;

      @media (min-width: $screen-sm) {
        font-size: $text-md;
      }
    }

    .home-score,
    .away-score {
      width: 1.2rem;

      @media (min-width: $screen-sm) {
        width: 1.5rem;
      }
    }

    input {
      background-color: $purple-400;
      width: 1.2rem;
      border: none;
      border-radius: 5px;
      text-align: center;

      font-size: $text-sm;
      font-weight: 700;
      color: $green-400;

      @media (min-width: $screen-sm) {
        width: 1.5rem;
        font-size: $text-md;
      }
    }
  }
}
</style>
