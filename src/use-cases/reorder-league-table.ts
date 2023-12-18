import type { TeamStanding } from '@/utils/mockData'

export function reorderLeagueTable(leagueTable: TeamStanding[]) {
  leagueTable.sort((a, b) => b.points - a.points)
  leagueTable.map((team, index) => {
    team.rank = index + 1

    return team
  })

  return leagueTable
}
