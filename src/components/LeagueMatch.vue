<script setup lang="ts">
import FixtureTeam from '@/components/FixtureTeam.vue'
import { isMatchFinished } from '@/utils/matchStatus'
import { getDate, getTime } from '@/utils/handleDateTime'
import { inject } from 'vue'
import { FixturesKey } from '@/types/symbols'

const fixtures = inject(FixturesKey, [])
</script>

<template>
  <ul class="fixture-container">
    <li class="fixture" v-for="match in fixtures" :key="match.fixture.id">
      <div class="match-info">
        <span class="date">{{ getDate(match.fixture.date) }}</span>
        <span class="stadium" :title="match.fixture.venue.name">{{
          match.fixture.venue.name
        }}</span>
        <span class="time">{{ getTime(match.fixture.date) }}</span>
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
            v-if="!isMatchFinished(match.fixture.status.short)"
            type="text"
          />
          <span>-</span>
          <span class="away-score" v-if="isMatchFinished(match.fixture.status.short)">{{
            match.goals.away
          }}</span>
          <input
            class="away-score"
            v-if="!isMatchFinished(match.fixture.status.short)"
            type="text"
          />
        </div>
        <FixtureTeam
          playsAt="away"
          :teamName="match.teams.away.name"
          :teamLogo="match.teams.away.logo"
        />
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
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
  }
}
</style>
