import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { type InjectionKey } from 'vue'
import type { FootballMatch, TeamStanding } from '@/utils/mockData'
import { mutations } from './mutations'
import { actions } from './actions'
import type { MatchResult } from '@/use-cases/calculate-match-result'

export type State = {
  fixtures: FootballMatch[]
  leagueTable: TeamStanding[]
  matchResults: MatchResult[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state() {
    return {
      fixtures: [],
      leagueTable: [],
      matchResults: []
    }
  },
  mutations,
  actions
})

export function useStore() {
  return baseUseStore(key)
}
