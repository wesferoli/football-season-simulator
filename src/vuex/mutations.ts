import type { State } from './store'

type StoreFixturesMutationPayload = Pick<State, 'fixtures'>
type StoreLeagueTableMutationPayload = Pick<State, 'leagueTable'>
type StoreMatchResultMutationPayload = Pick<State, 'matchResults'>

export const mutations = {
  storeFixtures(state: State, payload: StoreFixturesMutationPayload) {
    state.fixtures = payload.fixtures
  },
  storeLeagueTable(state: State, payload: StoreLeagueTableMutationPayload) {
    state.leagueTable = payload.leagueTable
  },
  storeMatchResults(state: State, payload: StoreMatchResultMutationPayload) {
    state.matchResults = payload.matchResults
  }
}
