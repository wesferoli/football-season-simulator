type Team = {
  id: number
  name: string
  logo: string
}
type League = {
  id: number
  name: string
  country: string
  logo: string
  flag: string
  season: number
}

type TableTeam = Team

type TableGoals = {
  for: number
  against: number
}

type TeamStats = {
  played: number
  win: number
  draw: number
  lose: number
  goals: TableGoals
}

export type TeamStanding = {
  rank: number
  team: TableTeam
  points: number
  goalsDiff: number
  group: string
  form: string
  status: string
  description: string | null
  all: TeamStats
  home: TeamStats
  away: TeamStats
  update: string
}

type TableLeague = League & {
  standings: TeamStanding[][]
}

type LeagueTableEntry = {
  league: TableLeague
}

type FixtureLongStatus =
  | 'Time To Be Defined'
  | 'Not Started'
  | 'First Half, Kick Off'
  | 'Halftime'
  | 'Second Half, 2nd Half Started'
  | 'Extra Time'
  | 'Break Time'
  | 'Penalty In Progress'
  | 'Match Suspended'
  | 'Match Interrupted'
  | 'Match Finished'
  | 'Match Postponed'
  | 'Match Cancelled'
  | 'Match Abandoned'
  | 'Technical Loss'
  | 'WalkOver'
  | 'In Progress'

export type FixtureShortStatus =
  | 'TBD'
  | 'NS'
  | '1H'
  | 'HT'
  | '2H'
  | 'ET'
  | 'BT'
  | 'P'
  | 'SUSP'
  | 'INT'
  | 'FT'
  | 'AET'
  | 'PEN'
  | 'PST'
  | 'CANC'
  | 'ABD'
  | 'AWD'
  | 'WO'
  | 'LIVE'

type FixtureStatus = {
  long: FixtureLongStatus
  short: FixtureShortStatus
  elapsed: number | null
}

type FixtureInfo = {
  id: number
  referee: string | null
  timezone: string
  date: string
  timestamp: number
  periods: {
    first: number | null
    second: number | null
  }
  venue: {
    id: number
    name: string
    city: string
  }
  status: FixtureStatus
}

type FixtureLeague = League & {
  round: string
}

type FixtureTeam = Team & {
  winner: boolean | null
}

type FixtureGoals = {
  home: number | null
  away: number | null
}

type FixtureScore = {
  halftime: FixtureGoals
  fulltime: FixtureGoals
  extratime: {
    home: number | null
    away: number | null
  }
  penalty: {
    home: number | null
    away: number | null
  }
}

export type FootballMatch = {
  fixture: FixtureInfo
  league: FixtureLeague
  teams: {
    home: FixtureTeam
    away: FixtureTeam
  }
  goals: FixtureGoals
  score: FixtureScore
}

export const leagueTable: LeagueTableEntry[] = [
  {
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-4.api-sports.io/football/leagues/39.png',
      flag: 'https://media-4.api-sports.io/flags/gb.svg',
      season: 2023,
      standings: [
        [
          {
            rank: 1,
            team: {
              id: 50,
              name: 'Manchester City',
              logo: 'https://media-4.api-sports.io/football/teams/50.png'
            },
            points: 28,
            goalsDiff: 20,
            group: 'Premier League',
            form: 'DWWWL',
            status: 'same',
            description: 'Promotion - Champions League (Group Stage: )',
            all: {
              played: 12,
              win: 9,
              draw: 1,
              lose: 2,
              goals: {
                for: 32,
                against: 12
              }
            },
            home: {
              played: 5,
              win: 5,
              draw: 0,
              lose: 0,
              goals: {
                for: 16,
                against: 3
              }
            },
            away: {
              played: 7,
              win: 4,
              draw: 1,
              lose: 2,
              goals: {
                for: 16,
                against: 9
              }
            },
            update: '2023-11-15T00:00:00+00:00'
          },
          {
            rank: 2,
            team: {
              id: 40,
              name: 'Liverpool',
              logo: 'https://media-4.api-sports.io/football/teams/40.png'
            },
            points: 27,
            goalsDiff: 17,
            group: 'Premier League',
            form: 'WDWWD',
            status: 'same',
            description: 'Promotion - Champions League (Group Stage: )',
            all: {
              played: 12,
              win: 8,
              draw: 3,
              lose: 1,
              goals: {
                for: 27,
                against: 10
              }
            },
            home: {
              played: 6,
              win: 6,
              draw: 0,
              lose: 0,
              goals: {
                for: 17,
                against: 2
              }
            },
            away: {
              played: 6,
              win: 2,
              draw: 3,
              lose: 1,
              goals: {
                for: 10,
                against: 8
              }
            },
            update: '2023-11-15T00:00:00+00:00'
          },
          {
            rank: 3,
            team: {
              id: 42,
              name: 'Arsenal',
              logo: 'https://media-4.api-sports.io/football/teams/42.png'
            },
            points: 27,
            goalsDiff: 16,
            group: 'Premier League',
            form: 'WLWDW',
            status: 'same',
            description: 'Promotion - Champions League (Group Stage: )',
            all: {
              played: 12,
              win: 8,
              draw: 3,
              lose: 1,
              goals: {
                for: 26,
                against: 10
              }
            },
            home: {
              played: 7,
              win: 5,
              draw: 2,
              lose: 0,
              goals: {
                for: 18,
                against: 7
              }
            },
            away: {
              played: 5,
              win: 3,
              draw: 1,
              lose: 1,
              goals: {
                for: 8,
                against: 3
              }
            },
            update: '2023-11-15T00:00:00+00:00'
          },
          {
            rank: 4,
            team: {
              id: 47,
              name: 'Tottenham',
              logo: 'https://media-4.api-sports.io/football/teams/47.png'
            },
            points: 26,
            goalsDiff: 9,
            group: 'Premier League',
            form: 'LLWWW',
            status: 'same',
            description: 'Promotion - Champions League (Group Stage: )',
            all: {
              played: 12,
              win: 8,
              draw: 2,
              lose: 2,
              goals: {
                for: 24,
                against: 15
              }
            },
            home: {
              played: 5,
              win: 4,
              draw: 0,
              lose: 1,
              goals: {
                for: 9,
                against: 6
              }
            },
            away: {
              played: 7,
              win: 4,
              draw: 2,
              lose: 1,
              goals: {
                for: 15,
                against: 9
              }
            },
            update: '2023-11-15T00:00:00+00:00'
          },
          {
            rank: 5,
            team: {
              id: 66,
              name: 'Aston Villa',
              logo: 'https://media-4.api-sports.io/football/teams/66.png'
            },
            points: 25,
            goalsDiff: 12,
            group: 'Premier League',
            form: 'WLWWD',
            status: 'same',
            description: 'Promotion - Europa League (Group Stage: )',
            all: {
              played: 12,
              win: 8,
              draw: 1,
              lose: 3,
              goals: {
                for: 29,
                against: 17
              }
            },
            home: {
              played: 6,
              win: 6,
              draw: 0,
              lose: 0,
              goals: {
                for: 23,
                against: 5
              }
            },
            away: {
              played: 6,
              win: 2,
              draw: 1,
              lose: 3,
              goals: {
                for: 6,
                against: 12
              }
            },
            update: '2023-11-15T00:00:00+00:00'
          },
          {
            rank: 6,
            team: {
              id: 33,
              name: 'Manchester United',
              logo: 'https://media-4.api-sports.io/football/teams/33.png'
            },
            points: 21,
            goalsDiff: -3,
            group: 'Premier League',
            form: 'WWLWW',
            status: 'same',
            description: null,
            all: {
              played: 12,
              win: 7,
              draw: 0,
              lose: 5,
              goals: {
                for: 13,
                against: 16
              }
            },
            home: {
              played: 7,
              win: 4,
              draw: 0,
              lose: 3,
              goals: {
                for: 8,
                against: 10
              }
            },
            away: {
              played: 5,
              win: 3,
              draw: 0,
              lose: 2,
              goals: {
                for: 5,
                against: 6
              }
            },
            update: '2023-11-15T00:00:00+00:00'
          },
          {
            rank: 7,
            team: {
              id: 34,
              name: 'Newcastle',
              logo: 'https://media-4.api-sports.io/football/teams/34.png'
            },
            points: 20,
            goalsDiff: 14,
            group: 'Premier League',
            form: 'LWDWD',
            status: 'same',
            description: null,
            all: {
              played: 12,
              win: 6,
              draw: 2,
              lose: 4,
              goals: {
                for: 27,
                against: 13
              }
            },
            home: {
              played: 6,
              win: 5,
              draw: 0,
              lose: 1,
              goals: {
                for: 14,
                against: 3
              }
            },
            away: {
              played: 6,
              win: 1,
              draw: 2,
              lose: 3,
              goals: {
                for: 13,
                against: 10
              }
            },
            update: '2023-11-15T00:00:00+00:00'
          },
          {
            rank: 8,
            team: {
              id: 51,
              name: 'Brighton',
              logo: 'https://media-4.api-sports.io/football/teams/51.png'
            },
            points: 19,
            goalsDiff: 4,
            group: 'Premier League',
            form: 'DDDLD',
            status: 'same',
            description: null,
            all: {
              played: 12,
              win: 5,
              draw: 4,
              lose: 3,
              goals: {
                for: 25,
                against: 21
              }
            },
            home: {
              played: 7,
              win: 3,
              draw: 3,
              lose: 1,
              goals: {
                for: 15,
                against: 10
              }
            },
            away: {
              played: 5,
              win: 2,
              draw: 1,
              lose: 2,
              goals: {
                for: 10,
                against: 11
              }
            },
            update: '2023-11-15T00:00:00+00:00'
          },
          {
            rank: 9,
            team: {
              id: 48,
              name: 'West Ham',
              logo: 'https://media-4.api-sports.io/football/teams/48.png'
            },
            points: 17,
            goalsDiff: -1,
            group: 'Premier League',
            form: 'WLLLD',
            status: 'same',
            description: null,
            all: {
              played: 12,
              win: 5,
              draw: 2,
              lose: 5,
              goals: {
                for: 21,
                against: 22
              }
            },
            home: {
              played: 6,
              win: 3,
              draw: 1,
              lose: 2,
              goals: {
                for: 11,
                against: 9
              }
            },
            away: {
              played: 6,
              win: 2,
              draw: 1,
              lose: 3,
              goals: {
                for: 10,
                against: 13
              }
            },
            update: '2023-11-15T00:00:00+00:00'
          },
          {
            rank: 10,
            team: {
              id: 49,
              name: 'Chelsea',
              logo: 'https://media-4.api-sports.io/football/teams/49.png'
            },
            points: 16,
            goalsDiff: 5,
            group: 'Premier League',
            form: 'DWLDW',
            status: 'same',
            description: null,
            all: {
              played: 12,
              win: 4,
              draw: 4,
              lose: 4,
              goals: {
                for: 21,
                against: 16
              }
            },
            home: {
              played: 7,
              win: 1,
              draw: 3,
              lose: 3,
              goals: {
                for: 10,
                against: 11
              }
            },
            away: {
              played: 5,
              win: 3,
              draw: 1,
              lose: 1,
              goals: {
                for: 11,
                against: 5
              }
            },
            update: '2023-11-15T00:00:00+00:00'
          },
          {
            rank: 11,
            team: {
              id: 55,
              name: 'Brentford',
              logo: 'https://media-4.api-sports.io/football/teams/55.png'
            },
            points: 16,
            goalsDiff: 2,
            group: 'Premier League',
            form: 'LWWWL',
            status: 'same',
            description: null,
            all: {
              played: 12,
              win: 4,
              draw: 4,
              lose: 4,
              goals: {
                for: 19,
                against: 17
              }
            },
            home: {
              played: 6,
              win: 2,
              draw: 3,
              lose: 1,
              goals: {
                for: 12,
                against: 10
              }
            },
            away: {
              played: 6,
              win: 2,
              draw: 1,
              lose: 3,
              goals: {
                for: 7,
                against: 7
              }
            },
            update: '2023-11-15T00:00:00+00:00'
          },
          {
            rank: 12,
            team: {
              id: 39,
              name: 'Wolves',
              logo: 'https://media-4.api-sports.io/football/teams/39.png'
            },
            points: 15,
            goalsDiff: -4,
            group: 'Premier League',
            form: 'WLDWD',
            status: 'same',
            description: null,
            all: {
              played: 12,
              win: 4,
              draw: 3,
              lose: 5,
              goals: {
                for: 16,
                against: 20
              }
            },
            home: {
              played: 6,
              win: 2,
              draw: 2,
              lose: 2,
              goals: {
                for: 9,
                against: 12
              }
            },
            away: {
              played: 6,
              win: 2,
              draw: 1,
              lose: 3,
              goals: {
                for: 7,
                against: 8
              }
            },
            update: '2023-11-15T00:00:00+00:00'
          },
          {
            rank: 13,
            team: {
              id: 52,
              name: 'Crystal Palace',
              logo: 'https://media-4.api-sports.io/football/teams/52.png'
            },
            points: 15,
            goalsDiff: -4,
            group: 'Premier League',
            form: 'LWLLD',
            status: 'same',
            description: null,
            all: {
              played: 12,
              win: 4,
              draw: 3,
              lose: 5,
              goals: {
                for: 12,
                against: 16
              }
            },
            home: {
              played: 6,
              win: 1,
              draw: 2,
              lose: 3,
              goals: {
                for: 6,
                against: 8
              }
            },
            away: {
              played: 6,
              win: 3,
              draw: 1,
              lose: 2,
              goals: {
                for: 6,
                against: 8
              }
            },
            update: '2023-11-15T00:00:00+00:00'
          },
          {
            rank: 14,
            team: {
              id: 45,
              name: 'Everton',
              logo: 'https://media-4.api-sports.io/football/teams/45.png'
            },
            points: 14,
            goalsDiff: -3,
            group: 'Premier League',
            form: 'WDWLW',
            status: 'same',
            description: null,
            all: {
              played: 12,
              win: 4,
              draw: 2,
              lose: 6,
              goals: {
                for: 14,
                against: 17
              }
            },
            home: {
              played: 6,
              win: 1,
              draw: 1,
              lose: 4,
              goals: {
                for: 5,
                against: 6
              }
            },
            away: {
              played: 6,
              win: 3,
              draw: 1,
              lose: 2,
              goals: {
                for: 9,
                against: 11
              }
            },
            update: '2023-11-15T00:00:00+00:00'
          },
          {
            rank: 15,
            team: {
              id: 65,
              name: 'Nottingham Forest',
              logo: 'https://media-4.api-sports.io/football/teams/65.png'
            },
            points: 13,
            goalsDiff: -4,
            group: 'Premier League',
            form: 'LWLDD',
            status: 'same',
            description: null,
            all: {
              played: 12,
              win: 3,
              draw: 4,
              lose: 5,
              goals: {
                for: 14,
                against: 18
              }
            },
            home: {
              played: 5,
              win: 2,
              draw: 3,
              lose: 0,
              goals: {
                for: 8,
                against: 5
              }
            },
            away: {
              played: 7,
              win: 1,
              draw: 1,
              lose: 5,
              goals: {
                for: 6,
                against: 13
              }
            },
            update: '2023-11-15T00:00:00+00:00'
          },
          {
            rank: 16,
            team: {
              id: 36,
              name: 'Fulham',
              logo: 'https://media-4.api-sports.io/football/teams/36.png'
            },
            points: 12,
            goalsDiff: -10,
            group: 'Premier League',
            form: 'LLDLW',
            status: 'same',
            description: null,
            all: {
              played: 12,
              win: 3,
              draw: 3,
              lose: 6,
              goals: {
                for: 10,
                against: 20
              }
            },
            home: {
              played: 5,
              win: 2,
              draw: 0,
              lose: 3,
              goals: {
                for: 4,
                against: 7
              }
            },
            away: {
              played: 7,
              win: 1,
              draw: 3,
              lose: 3,
              goals: {
                for: 6,
                against: 13
              }
            },
            update: '2023-11-15T00:00:00+00:00'
          },
          {
            rank: 17,
            team: {
              id: 35,
              name: 'Bournemouth',
              logo: 'https://media-4.api-sports.io/football/teams/35.png'
            },
            points: 9,
            goalsDiff: -16,
            group: 'Premier League',
            form: 'WLWLL',
            status: 'same',
            description: null,
            all: {
              played: 12,
              win: 2,
              draw: 3,
              lose: 7,
              goals: {
                for: 11,
                against: 27
              }
            },
            home: {
              played: 7,
              win: 2,
              draw: 2,
              lose: 3,
              goals: {
                for: 6,
                against: 10
              }
            },
            away: {
              played: 5,
              win: 0,
              draw: 1,
              lose: 4,
              goals: {
                for: 5,
                against: 17
              }
            },
            update: '2023-11-15T00:00:00+00:00'
          },
          {
            rank: 18,
            team: {
              id: 1359,
              name: 'Luton',
              logo: 'https://media-4.api-sports.io/football/teams/1359.png'
            },
            points: 6,
            goalsDiff: -12,
            group: 'Premier League',
            form: 'LDLDL',
            status: 'same',
            description: 'Relegation - Championship',
            all: {
              played: 12,
              win: 1,
              draw: 3,
              lose: 8,
              goals: {
                for: 10,
                against: 22
              }
            },
            home: {
              played: 5,
              win: 0,
              draw: 2,
              lose: 3,
              goals: {
                for: 4,
                against: 7
              }
            },
            away: {
              played: 7,
              win: 1,
              draw: 1,
              lose: 5,
              goals: {
                for: 6,
                against: 15
              }
            },
            update: '2023-11-15T00:00:00+00:00'
          },
          {
            rank: 19,
            team: {
              id: 62,
              name: 'Sheffield Utd',
              logo: 'https://media-4.api-sports.io/football/teams/62.png'
            },
            points: 5,
            goalsDiff: -21,
            group: 'Premier League',
            form: 'DWLLL',
            status: 'same',
            description: 'Relegation - Championship',
            all: {
              played: 12,
              win: 1,
              draw: 2,
              lose: 9,
              goals: {
                for: 10,
                against: 31
              }
            },
            home: {
              played: 6,
              win: 1,
              draw: 1,
              lose: 4,
              goals: {
                for: 6,
                against: 16
              }
            },
            away: {
              played: 6,
              win: 0,
              draw: 1,
              lose: 5,
              goals: {
                for: 4,
                against: 15
              }
            },
            update: '2023-11-15T00:00:00+00:00'
          },
          {
            rank: 20,
            team: {
              id: 44,
              name: 'Burnley',
              logo: 'https://media-4.api-sports.io/football/teams/44.png'
            },
            points: 4,
            goalsDiff: -21,
            group: 'Premier League',
            form: 'LLLLL',
            status: 'same',
            description: 'Relegation - Championship',
            all: {
              played: 12,
              win: 1,
              draw: 1,
              lose: 10,
              goals: {
                for: 9,
                against: 30
              }
            },
            home: {
              played: 6,
              win: 0,
              draw: 0,
              lose: 6,
              goals: {
                for: 4,
                against: 18
              }
            },
            away: {
              played: 6,
              win: 1,
              draw: 1,
              lose: 4,
              goals: {
                for: 5,
                against: 12
              }
            },
            update: '2023-11-15T00:00:00+00:00'
          }
        ]
      ]
    }
  }
]
export const matchesRound12: FootballMatch[] = [
  {
    fixture: {
      id: 1035147,
      referee: 'C. Kavanagh',
      timezone: 'UTC',
      date: '2023-11-11T17:30:00+00:00',
      timestamp: 1699723800,
      periods: {
        first: 1699723800,
        second: 1699727400
      },
      venue: {
        id: 504,
        name: 'Vitality Stadium',
        city: 'Bournemouth, Dorset'
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90
      }
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-4.api-sports.io/football/leagues/39.png',
      flag: 'https://media-4.api-sports.io/flags/gb.svg',
      season: 2023,
      round: 'Regular Season - 12'
    },
    teams: {
      home: {
        id: 35,
        name: 'Bournemouth',
        logo: 'https://media-4.api-sports.io/football/teams/35.png',
        winner: true
      },
      away: {
        id: 34,
        name: 'Newcastle',
        logo: 'https://media-4.api-sports.io/football/teams/34.png',
        winner: false
      }
    },
    goals: {
      home: 2,
      away: 0
    },
    score: {
      halftime: {
        home: 0,
        away: 0
      },
      fulltime: {
        home: 2,
        away: 0
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  },
  {
    fixture: {
      id: 1035148,
      referee: 'M. Oliver',
      timezone: 'UTC',
      date: '2023-11-11T15:00:00+00:00',
      timestamp: 1699714800,
      periods: {
        first: 1699714800,
        second: 1699718400
      },
      venue: {
        id: 494,
        name: 'Emirates Stadium',
        city: 'London'
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90
      }
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-4.api-sports.io/football/leagues/39.png',
      flag: 'https://media-4.api-sports.io/flags/gb.svg',
      season: 2023,
      round: 'Regular Season - 12'
    },
    teams: {
      home: {
        id: 42,
        name: 'Arsenal',
        logo: 'https://media-4.api-sports.io/football/teams/42.png',
        winner: true
      },
      away: {
        id: 44,
        name: 'Burnley',
        logo: 'https://media-4.api-sports.io/football/teams/44.png',
        winner: false
      }
    },
    goals: {
      home: 3,
      away: 1
    },
    score: {
      halftime: {
        home: 1,
        away: 0
      },
      fulltime: {
        home: 3,
        away: 1
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  },
  {
    fixture: {
      id: 1035149,
      referee: 'S. Hooper',
      timezone: 'UTC',
      date: '2023-11-12T14:00:00+00:00',
      timestamp: 1699797600,
      periods: {
        first: 1699797600,
        second: 1699801200
      },
      venue: {
        id: 495,
        name: 'Villa Park',
        city: 'Birmingham'
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90
      }
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-4.api-sports.io/football/leagues/39.png',
      flag: 'https://media-4.api-sports.io/flags/gb.svg',
      season: 2023,
      round: 'Regular Season - 12'
    },
    teams: {
      home: {
        id: 66,
        name: 'Aston Villa',
        logo: 'https://media-4.api-sports.io/football/teams/66.png',
        winner: true
      },
      away: {
        id: 36,
        name: 'Fulham',
        logo: 'https://media-4.api-sports.io/football/teams/36.png',
        winner: false
      }
    },
    goals: {
      home: 3,
      away: 1
    },
    score: {
      halftime: {
        home: 2,
        away: 0
      },
      fulltime: {
        home: 3,
        away: 1
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  },
  {
    fixture: {
      id: 1035150,
      referee: 'J. Brooks',
      timezone: 'UTC',
      date: '2023-11-12T14:00:00+00:00',
      timestamp: 1699797600,
      periods: {
        first: 1699797600,
        second: 1699801200
      },
      venue: {
        id: 508,
        name: 'The American Express Community Stadium',
        city: 'Falmer, East Sussex'
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90
      }
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-4.api-sports.io/football/leagues/39.png',
      flag: 'https://media-4.api-sports.io/flags/gb.svg',
      season: 2023,
      round: 'Regular Season - 12'
    },
    teams: {
      home: {
        id: 51,
        name: 'Brighton',
        logo: 'https://media-4.api-sports.io/football/teams/51.png',
        winner: null
      },
      away: {
        id: 62,
        name: 'Sheffield Utd',
        logo: 'https://media-4.api-sports.io/football/teams/62.png',
        winner: null
      }
    },
    goals: {
      home: 1,
      away: 1
    },
    score: {
      halftime: {
        home: 1,
        away: 0
      },
      fulltime: {
        home: 1,
        away: 1
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  },
  {
    fixture: {
      id: 1035151,
      referee: 'A. Taylor',
      timezone: 'UTC',
      date: '2023-11-12T16:30:00+00:00',
      timestamp: 1699806600,
      periods: {
        first: 1699806600,
        second: 1699810200
      },
      venue: {
        id: 519,
        name: 'Stamford Bridge',
        city: 'London'
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90
      }
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-4.api-sports.io/football/leagues/39.png',
      flag: 'https://media-4.api-sports.io/flags/gb.svg',
      season: 2023,
      round: 'Regular Season - 12'
    },
    teams: {
      home: {
        id: 49,
        name: 'Chelsea',
        logo: 'https://media-4.api-sports.io/football/teams/49.png',
        winner: null
      },
      away: {
        id: 50,
        name: 'Manchester City',
        logo: 'https://media-4.api-sports.io/football/teams/50.png',
        winner: null
      }
    },
    goals: {
      home: 4,
      away: 4
    },
    score: {
      halftime: {
        home: 2,
        away: 2
      },
      fulltime: {
        home: 4,
        away: 4
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  },
  {
    fixture: {
      id: 1035152,
      referee: 'S. Barrott',
      timezone: 'UTC',
      date: '2023-11-11T15:00:00+00:00',
      timestamp: 1699714800,
      periods: {
        first: 1699714800,
        second: 1699718400
      },
      venue: {
        id: 525,
        name: 'Selhurst Park',
        city: 'London'
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90
      }
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-4.api-sports.io/football/leagues/39.png',
      flag: 'https://media-4.api-sports.io/flags/gb.svg',
      season: 2023,
      round: 'Regular Season - 12'
    },
    teams: {
      home: {
        id: 52,
        name: 'Crystal Palace',
        logo: 'https://media-4.api-sports.io/football/teams/52.png',
        winner: false
      },
      away: {
        id: 45,
        name: 'Everton',
        logo: 'https://media-4.api-sports.io/football/teams/45.png',
        winner: true
      }
    },
    goals: {
      home: 2,
      away: 3
    },
    score: {
      halftime: {
        home: 1,
        away: 1
      },
      fulltime: {
        home: 2,
        away: 3
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  },
  {
    fixture: {
      id: 1035153,
      referee: 'P. Tierney',
      timezone: 'UTC',
      date: '2023-11-12T14:00:00+00:00',
      timestamp: 1699797600,
      periods: {
        first: 1699797600,
        second: 1699801200
      },
      venue: {
        id: 550,
        name: 'Anfield',
        city: 'Liverpool'
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90
      }
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-4.api-sports.io/football/leagues/39.png',
      flag: 'https://media-4.api-sports.io/flags/gb.svg',
      season: 2023,
      round: 'Regular Season - 12'
    },
    teams: {
      home: {
        id: 40,
        name: 'Liverpool',
        logo: 'https://media-4.api-sports.io/football/teams/40.png',
        winner: true
      },
      away: {
        id: 55,
        name: 'Brentford',
        logo: 'https://media-4.api-sports.io/football/teams/55.png',
        winner: false
      }
    },
    goals: {
      home: 3,
      away: 0
    },
    score: {
      halftime: {
        home: 1,
        away: 0
      },
      fulltime: {
        home: 3,
        away: 0
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  },
  {
    fixture: {
      id: 1035154,
      referee: 'G. Scott',
      timezone: 'UTC',
      date: '2023-11-11T15:00:00+00:00',
      timestamp: 1699714800,
      periods: {
        first: 1699714800,
        second: 1699718400
      },
      venue: {
        id: 556,
        name: 'Old Trafford',
        city: 'Manchester'
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90
      }
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-4.api-sports.io/football/leagues/39.png',
      flag: 'https://media-4.api-sports.io/flags/gb.svg',
      season: 2023,
      round: 'Regular Season - 12'
    },
    teams: {
      home: {
        id: 33,
        name: 'Manchester United',
        logo: 'https://media-4.api-sports.io/football/teams/33.png',
        winner: true
      },
      away: {
        id: 1359,
        name: 'Luton',
        logo: 'https://media-4.api-sports.io/football/teams/1359.png',
        winner: false
      }
    },
    goals: {
      home: 1,
      away: 0
    },
    score: {
      halftime: {
        home: 0,
        away: 0
      },
      fulltime: {
        home: 1,
        away: 0
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  },
  {
    fixture: {
      id: 1035155,
      referee: 'M. Salisbury',
      timezone: 'UTC',
      date: '2023-11-12T14:00:00+00:00',
      timestamp: 1699797600,
      periods: {
        first: 1699797600,
        second: 1699801200
      },
      venue: {
        id: 598,
        name: 'London Stadium',
        city: 'London'
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90
      }
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-4.api-sports.io/football/leagues/39.png',
      flag: 'https://media-4.api-sports.io/flags/gb.svg',
      season: 2023,
      round: 'Regular Season - 12'
    },
    teams: {
      home: {
        id: 48,
        name: 'West Ham',
        logo: 'https://media-4.api-sports.io/football/teams/48.png',
        winner: true
      },
      away: {
        id: 65,
        name: 'Nottingham Forest',
        logo: 'https://media-4.api-sports.io/football/teams/65.png',
        winner: false
      }
    },
    goals: {
      home: 3,
      away: 2
    },
    score: {
      halftime: {
        home: 1,
        away: 1
      },
      fulltime: {
        home: 3,
        away: 2
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  },
  {
    fixture: {
      id: 1035156,
      referee: 'T. Robinson',
      timezone: 'UTC',
      date: '2023-11-11T12:30:00+00:00',
      timestamp: 1699705800,
      periods: {
        first: 1699705800,
        second: 1699709400
      },
      venue: {
        id: 600,
        name: 'Molineux Stadium',
        city: 'Wolverhampton, West Midlands'
      },
      status: {
        long: 'Match Finished',
        short: 'FT',
        elapsed: 90
      }
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-4.api-sports.io/football/leagues/39.png',
      flag: 'https://media-4.api-sports.io/flags/gb.svg',
      season: 2023,
      round: 'Regular Season - 12'
    },
    teams: {
      home: {
        id: 39,
        name: 'Wolves',
        logo: 'https://media-4.api-sports.io/football/teams/39.png',
        winner: true
      },
      away: {
        id: 47,
        name: 'Tottenham',
        logo: 'https://media-4.api-sports.io/football/teams/47.png',
        winner: false
      }
    },
    goals: {
      home: 2,
      away: 1
    },
    score: {
      halftime: {
        home: 0,
        away: 1
      },
      fulltime: {
        home: 2,
        away: 1
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  }
]
export const matchesRound13: FootballMatch[] = [
  {
    fixture: {
      id: 1035294,
      referee: null,
      timezone: 'UTC',
      date: '2023-11-25T17:30:00+00:00',
      timestamp: 1700933400,
      periods: {
        first: null,
        second: null
      },
      venue: {
        id: 10503,
        name: 'Gtech Community Stadium',
        city: 'Brentford, Middlesex'
      },
      status: {
        long: 'Not Started',
        short: 'NS',
        elapsed: null
      }
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-4.api-sports.io/football/leagues/39.png',
      flag: 'https://media-4.api-sports.io/flags/gb.svg',
      season: 2023,
      round: 'Regular Season - 13'
    },
    teams: {
      home: {
        id: 55,
        name: 'Brentford',
        logo: 'https://media-4.api-sports.io/football/teams/55.png',
        winner: null
      },
      away: {
        id: 42,
        name: 'Arsenal',
        logo: 'https://media-4.api-sports.io/football/teams/42.png',
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    },
    score: {
      halftime: {
        home: null,
        away: null
      },
      fulltime: {
        home: null,
        away: null
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  },
  {
    fixture: {
      id: 1035295,
      referee: null,
      timezone: 'UTC',
      date: '2023-11-25T15:00:00+00:00',
      timestamp: 1700924400,
      periods: {
        first: null,
        second: null
      },
      venue: {
        id: 512,
        name: 'Turf Moor',
        city: 'Burnley'
      },
      status: {
        long: 'Not Started',
        short: 'NS',
        elapsed: null
      }
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-4.api-sports.io/football/leagues/39.png',
      flag: 'https://media-4.api-sports.io/flags/gb.svg',
      season: 2023,
      round: 'Regular Season - 13'
    },
    teams: {
      home: {
        id: 44,
        name: 'Burnley',
        logo: 'https://media-4.api-sports.io/football/teams/44.png',
        winner: null
      },
      away: {
        id: 48,
        name: 'West Ham',
        logo: 'https://media-4.api-sports.io/football/teams/48.png',
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    },
    score: {
      halftime: {
        home: null,
        away: null
      },
      fulltime: {
        home: null,
        away: null
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  },
  {
    fixture: {
      id: 1035296,
      referee: null,
      timezone: 'UTC',
      date: '2023-11-26T16:30:00+00:00',
      timestamp: 1701016200,
      periods: {
        first: null,
        second: null
      },
      venue: {
        id: 8560,
        name: 'Goodison Park',
        city: 'Liverpool'
      },
      status: {
        long: 'Not Started',
        short: 'NS',
        elapsed: null
      }
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-4.api-sports.io/football/leagues/39.png',
      flag: 'https://media-4.api-sports.io/flags/gb.svg',
      season: 2023,
      round: 'Regular Season - 13'
    },
    teams: {
      home: {
        id: 45,
        name: 'Everton',
        logo: 'https://media-4.api-sports.io/football/teams/45.png',
        winner: null
      },
      away: {
        id: 33,
        name: 'Manchester United',
        logo: 'https://media-4.api-sports.io/football/teams/33.png',
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    },
    score: {
      halftime: {
        home: null,
        away: null
      },
      fulltime: {
        home: null,
        away: null
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  },
  {
    fixture: {
      id: 1035297,
      referee: null,
      timezone: 'UTC',
      date: '2023-11-27T20:00:00+00:00',
      timestamp: 1701115200,
      periods: {
        first: null,
        second: null
      },
      venue: {
        id: 535,
        name: 'Craven Cottage',
        city: 'London'
      },
      status: {
        long: 'Not Started',
        short: 'NS',
        elapsed: null
      }
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-4.api-sports.io/football/leagues/39.png',
      flag: 'https://media-4.api-sports.io/flags/gb.svg',
      season: 2023,
      round: 'Regular Season - 13'
    },
    teams: {
      home: {
        id: 36,
        name: 'Fulham',
        logo: 'https://media-4.api-sports.io/football/teams/36.png',
        winner: null
      },
      away: {
        id: 39,
        name: 'Wolves',
        logo: 'https://media-4.api-sports.io/football/teams/39.png',
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    },
    score: {
      halftime: {
        home: null,
        away: null
      },
      fulltime: {
        home: null,
        away: null
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  },
  {
    fixture: {
      id: 1035298,
      referee: null,
      timezone: 'UTC',
      date: '2023-11-25T15:00:00+00:00',
      timestamp: 1700924400,
      periods: {
        first: null,
        second: null
      },
      venue: {
        id: 551,
        name: 'Kenilworth Road',
        city: 'Luton, Bedfordshire'
      },
      status: {
        long: 'Not Started',
        short: 'NS',
        elapsed: null
      }
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-4.api-sports.io/football/leagues/39.png',
      flag: 'https://media-4.api-sports.io/flags/gb.svg',
      season: 2023,
      round: 'Regular Season - 13'
    },
    teams: {
      home: {
        id: 1359,
        name: 'Luton',
        logo: 'https://media-4.api-sports.io/football/teams/1359.png',
        winner: null
      },
      away: {
        id: 52,
        name: 'Crystal Palace',
        logo: 'https://media-4.api-sports.io/football/teams/52.png',
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    },
    score: {
      halftime: {
        home: null,
        away: null
      },
      fulltime: {
        home: null,
        away: null
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  },
  {
    fixture: {
      id: 1035299,
      referee: null,
      timezone: 'UTC',
      date: '2023-11-25T12:30:00+00:00',
      timestamp: 1700915400,
      periods: {
        first: null,
        second: null
      },
      venue: {
        id: 555,
        name: 'Etihad Stadium',
        city: 'Manchester'
      },
      status: {
        long: 'Not Started',
        short: 'NS',
        elapsed: null
      }
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-4.api-sports.io/football/leagues/39.png',
      flag: 'https://media-4.api-sports.io/flags/gb.svg',
      season: 2023,
      round: 'Regular Season - 13'
    },
    teams: {
      home: {
        id: 50,
        name: 'Manchester City',
        logo: 'https://media-4.api-sports.io/football/teams/50.png',
        winner: null
      },
      away: {
        id: 40,
        name: 'Liverpool',
        logo: 'https://media-4.api-sports.io/football/teams/40.png',
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    },
    score: {
      halftime: {
        home: null,
        away: null
      },
      fulltime: {
        home: null,
        away: null
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  },
  {
    fixture: {
      id: 1035300,
      referee: null,
      timezone: 'UTC',
      date: '2023-11-25T15:00:00+00:00',
      timestamp: 1700924400,
      periods: {
        first: null,
        second: null
      },
      venue: {
        id: 562,
        name: "St. James' Park",
        city: 'Newcastle upon Tyne'
      },
      status: {
        long: 'Not Started',
        short: 'NS',
        elapsed: null
      }
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-4.api-sports.io/football/leagues/39.png',
      flag: 'https://media-4.api-sports.io/flags/gb.svg',
      season: 2023,
      round: 'Regular Season - 13'
    },
    teams: {
      home: {
        id: 34,
        name: 'Newcastle',
        logo: 'https://media-4.api-sports.io/football/teams/34.png',
        winner: null
      },
      away: {
        id: 49,
        name: 'Chelsea',
        logo: 'https://media-4.api-sports.io/football/teams/49.png',
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    },
    score: {
      halftime: {
        home: null,
        away: null
      },
      fulltime: {
        home: null,
        away: null
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  },
  {
    fixture: {
      id: 1035301,
      referee: null,
      timezone: 'UTC',
      date: '2023-11-25T15:00:00+00:00',
      timestamp: 1700924400,
      periods: {
        first: null,
        second: null
      },
      venue: {
        id: 566,
        name: 'The City Ground',
        city: 'Nottingham, Nottinghamshire'
      },
      status: {
        long: 'Not Started',
        short: 'NS',
        elapsed: null
      }
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-4.api-sports.io/football/leagues/39.png',
      flag: 'https://media-4.api-sports.io/flags/gb.svg',
      season: 2023,
      round: 'Regular Season - 13'
    },
    teams: {
      home: {
        id: 65,
        name: 'Nottingham Forest',
        logo: 'https://media-4.api-sports.io/football/teams/65.png',
        winner: null
      },
      away: {
        id: 51,
        name: 'Brighton',
        logo: 'https://media-4.api-sports.io/football/teams/51.png',
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    },
    score: {
      halftime: {
        home: null,
        away: null
      },
      fulltime: {
        home: null,
        away: null
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  },
  {
    fixture: {
      id: 1035302,
      referee: null,
      timezone: 'UTC',
      date: '2023-11-25T15:00:00+00:00',
      timestamp: 1700924400,
      periods: {
        first: null,
        second: null
      },
      venue: {
        id: 581,
        name: 'Bramall Lane',
        city: 'Sheffield'
      },
      status: {
        long: 'Not Started',
        short: 'NS',
        elapsed: null
      }
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-4.api-sports.io/football/leagues/39.png',
      flag: 'https://media-4.api-sports.io/flags/gb.svg',
      season: 2023,
      round: 'Regular Season - 13'
    },
    teams: {
      home: {
        id: 62,
        name: 'Sheffield Utd',
        logo: 'https://media-4.api-sports.io/football/teams/62.png',
        winner: null
      },
      away: {
        id: 35,
        name: 'Bournemouth',
        logo: 'https://media-4.api-sports.io/football/teams/35.png',
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    },
    score: {
      halftime: {
        home: null,
        away: null
      },
      fulltime: {
        home: null,
        away: null
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  },
  {
    fixture: {
      id: 1035303,
      referee: null,
      timezone: 'UTC',
      date: '2023-11-26T14:00:00+00:00',
      timestamp: 1701007200,
      periods: {
        first: null,
        second: null
      },
      venue: {
        id: 593,
        name: 'Tottenham Hotspur Stadium',
        city: 'London'
      },
      status: {
        long: 'Not Started',
        short: 'NS',
        elapsed: null
      }
    },
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-4.api-sports.io/football/leagues/39.png',
      flag: 'https://media-4.api-sports.io/flags/gb.svg',
      season: 2023,
      round: 'Regular Season - 13'
    },
    teams: {
      home: {
        id: 47,
        name: 'Tottenham',
        logo: 'https://media-4.api-sports.io/football/teams/47.png',
        winner: null
      },
      away: {
        id: 66,
        name: 'Aston Villa',
        logo: 'https://media-4.api-sports.io/football/teams/66.png',
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    },
    score: {
      halftime: {
        home: null,
        away: null
      },
      fulltime: {
        home: null,
        away: null
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  }
]
