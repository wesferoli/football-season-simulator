import type { MatchResult } from '@/use-cases/calculate-match-result'
import type { State } from './store'
import type { ActionContext } from 'vuex'

type StoreFixturesActionPayload = Pick<State, 'fixtures'>
type StoreLeagueTableActionPayload = Pick<State, 'leagueTable'>
type StoreMatchResultActionPayload = {
  matchResult: MatchResult
}

export const actions = {
  storeFixtures(context: ActionContext<State, State>, { fixtures }: StoreFixturesActionPayload) {
    context.commit('storeFixtures', { fixtures })
  },
  storeLeagueTable(
    context: ActionContext<State, State>,
    { leagueTable }: StoreLeagueTableActionPayload
  ) {
    context.commit('storeLeagueTable', { leagueTable })
  },
  storeMatchResults(
    context: ActionContext<State, State>,
    { matchResult }: StoreMatchResultActionPayload
  ) {
    const copyMatchResults = [...context.state.matchResults]

    const matchResultIndex = copyMatchResults.findIndex(
      (result) =>
        result.fixtureId === matchResult.fixtureId && result.team.id === matchResult.team.id
    )

    if (matchResultIndex >= 0) {
      copyMatchResults[matchResultIndex] = matchResult
    } else {
      copyMatchResults.push(matchResult)
    }

    context.commit('storeMatchResults', { matchResults: copyMatchResults })
  }
}
