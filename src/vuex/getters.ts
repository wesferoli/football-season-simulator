import type { TeamStanding } from '@/utils/mockData'
import type { State } from './store'

export const getters = {
  leagueTableWithComputedFixtures(state: State) {
    const { matchResults } = state
    const copyLeagueTable: TeamStanding[] = JSON.parse(JSON.stringify(state.leagueTable))

    matchResults.forEach((result) => {
      const teamIndex = copyLeagueTable.findIndex(({ team }) => team.id === result.team.id)

      if (teamIndex >= 0) {
        copyLeagueTable[teamIndex].points += result.team.points
        copyLeagueTable[teamIndex].all.played += result.team.played
        copyLeagueTable[teamIndex].all.goals.for += result.team.goals.for
        copyLeagueTable[teamIndex].all.goals.against += result.team.goals.against
        copyLeagueTable[teamIndex].goalsDiff += result.team.goalsDiff
        copyLeagueTable[teamIndex].all.win += result.team.win
        copyLeagueTable[teamIndex].all.draw += result.team.draw
        copyLeagueTable[teamIndex].all.lose += result.team.lose
      }
    })

    return copyLeagueTable
  }
}
