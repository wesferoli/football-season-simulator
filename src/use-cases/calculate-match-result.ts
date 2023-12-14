import type { FootballMatch } from '@/utils/mockData'

export type MatchResult = {
  fixtureId: number
  team: {
    id: number
    name: string
    points: number
    played: number
    goalsDiff: number
    goals: {
      for: number
      against: number
    }
  }
}
type PossibleResults = {
  homeWin: MatchResult[]
  awayWin: MatchResult[]
  draw: MatchResult[]
}

export function calculateMatchResult(match: FootballMatch) {
  if (!match.score.fulltime.home || !match.score.fulltime.away) {
    return null
  }

  const conditions = {
    homeWin: match.score.fulltime.home > match.score.fulltime.away,
    awayWin: match.score.fulltime.home < match.score.fulltime.away,
    draw: match.score.fulltime.home === match.score.fulltime.away
  }

  const possibleResults: PossibleResults = {
    homeWin: [
      {
        fixtureId: match.fixture.id,
        team: {
          id: match.teams.home.id,
          name: match.teams.home.name,
          points: 3,
          played: 1,
          goalsDiff: Number(match.score.fulltime.home) - Number(match.score.fulltime.away),
          goals: {
            for: Number(match.score.fulltime.home),
            against: Number(match.score.fulltime.away)
          }
        }
      },
      {
        fixtureId: match.fixture.id,
        team: {
          id: match.teams.away.id,
          name: match.teams.away.name,
          points: 0,
          played: 1,
          goalsDiff: Number(match.score.fulltime.away) - Number(match.score.fulltime.home),
          goals: {
            for: Number(match.score.fulltime.away),
            against: Number(match.score.fulltime.home)
          }
        }
      }
    ],
    awayWin: [
      {
        fixtureId: match.fixture.id,
        team: {
          id: match.teams.home.id,
          name: match.teams.home.name,
          points: 0,
          played: 1,
          goalsDiff: Number(match.score.fulltime.home) - Number(match.score.fulltime.away),
          goals: {
            for: Number(match.score.fulltime.home),
            against: Number(match.score.fulltime.away)
          }
        }
      },
      {
        fixtureId: match.fixture.id,
        team: {
          id: match.teams.away.id,
          name: match.teams.away.name,
          points: 3,
          played: 1,
          goalsDiff: Number(match.score.fulltime.away) - Number(match.score.fulltime.home),
          goals: {
            for: Number(match.score.fulltime.away),
            against: Number(match.score.fulltime.home)
          }
        }
      }
    ],
    draw: [
      {
        fixtureId: match.fixture.id,
        team: {
          id: match.teams.home.id,
          name: match.teams.home.name,
          points: 1,
          played: 1,
          goalsDiff: Number(match.score.fulltime.home) - Number(match.score.fulltime.away),
          goals: {
            for: Number(match.score.fulltime.home),
            against: Number(match.score.fulltime.away)
          }
        }
      },
      {
        fixtureId: match.fixture.id,
        team: {
          id: match.teams.away.id,
          name: match.teams.away.name,
          points: 1,
          played: 1,
          goalsDiff: Number(match.score.fulltime.away) - Number(match.score.fulltime.home),
          goals: {
            for: Number(match.score.fulltime.away),
            against: Number(match.score.fulltime.home)
          }
        }
      }
    ]
  }

  if (conditions['homeWin']) {
    return possibleResults['homeWin']
  }

  if (conditions['awayWin']) {
    return possibleResults['awayWin']
  }

  return possibleResults['draw']
}
