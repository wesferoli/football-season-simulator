import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { type InjectionKey } from 'vue'
import type { FootballMatch, TeamStanding } from '@/utils/mockData'

export type State = {
  fixtures: FootballMatch[]
  leagueTable: TeamStanding[]
}
type StoreFixturesMutationPayload = Pick<State, 'fixtures'>
type StoreLeagueTableMutationPayload = Pick<State, 'leagueTable'>

type StoreFixturesActionPayload = Pick<State, 'fixtures'>
type StoreLeagueTableActionPayload = Pick<State, 'leagueTable'>

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state() {
    return {
      fixtures: [],
      leagueTable: []
    }
  },
  mutations: {
    storeFixtures(state, payload: StoreFixturesMutationPayload) {
      state.fixtures = payload.fixtures
    },
    storeLeagueTable(state, payload: StoreLeagueTableMutationPayload) {
      state.leagueTable = payload.leagueTable
    }
  },
  actions: {
    storeFixtures(context, { fixtures }: StoreFixturesActionPayload) {
      context.commit('storeFixtures', { fixtures })
    },
    storeLeagueTable(context, { leagueTable }: StoreLeagueTableActionPayload) {
      context.commit('storeLeagueTable', { leagueTable })
    }
  }
})

export function useStore() {
  return baseUseStore(key)
}
