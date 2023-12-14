import type { FootballMatch } from '@/utils/mockData'

export type MatchResult = {
  fixtureId: number
  points: number
  played: number
  team: {
    id: number
    name: string
  }
  goals: {
    for: number
    against: number
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
        points: 3,
        played: 1,
        team: {
          id: match.teams.home.id,
          name: match.teams.home.name
        },
        goals: {
          for: Number(match.score.fulltime.home),
          against: Number(match.score.fulltime.away)
        }
      },
      {
        fixtureId: match.fixture.id,
        points: 0,
        played: 1,
        team: {
          id: match.teams.away.id,
          name: match.teams.away.name
        },
        goals: {
          for: Number(match.score.fulltime.away),
          against: Number(match.score.fulltime.home)
        }
      }
    ],
    awayWin: [
      {
        fixtureId: match.fixture.id,
        points: 0,
        played: 1,
        team: {
          id: match.teams.home.id,
          name: match.teams.home.name
        },
        goals: {
          for: Number(match.score.fulltime.home),
          against: Number(match.score.fulltime.away)
        }
      },
      {
        fixtureId: match.fixture.id,
        points: 3,
        played: 1,
        team: {
          id: match.teams.away.id,
          name: match.teams.away.name
        },
        goals: {
          for: Number(match.score.fulltime.away),
          against: Number(match.score.fulltime.home)
        }
      }
    ],
    draw: [
      {
        fixtureId: match.fixture.id,
        points: 1,
        played: 1,
        team: {
          id: match.teams.home.id,
          name: match.teams.home.name
        },
        goals: {
          for: Number(match.score.fulltime.home),
          against: Number(match.score.fulltime.away)
        }
      },
      {
        fixtureId: match.fixture.id,
        points: 1,
        played: 1,
        team: {
          id: match.teams.away.id,
          name: match.teams.away.name
        },
        goals: {
          for: Number(match.score.fulltime.away),
          against: Number(match.score.fulltime.home)
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
