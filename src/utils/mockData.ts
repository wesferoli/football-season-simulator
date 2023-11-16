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

export const leagueTable: LeagueTableEntry[] = [
  {
    league: {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-3.api-sports.io/football/leagues/39.png',
      flag: 'https://media-1.api-sports.io/flags/gb.svg',
      season: 2023,
      standings: [
        [
          {
            rank: 1,
            team: {
              id: 50,
              name: 'Manchester City',
              logo: 'https://media-3.api-sports.io/football/teams/50.png'
            },
            points: 9,
            goalsDiff: 5,
            group: 'Premier League',
            form: 'WWW',
            status: 'same',
            description: 'Promotion - Champions League (Group Stage: )',
            all: {
              played: 3,
              win: 3,
              draw: 0,
              lose: 0,
              goals: {
                for: 6,
                against: 1
              }
            },
            home: {
              played: 1,
              win: 1,
              draw: 0,
              lose: 0,
              goals: {
                for: 1,
                against: 0
              }
            },
            away: {
              played: 2,
              win: 2,
              draw: 0,
              lose: 0,
              goals: {
                for: 5,
                against: 1
              }
            },
            update: '2023-08-29T00:00:00+00:00'
          },
          {
            rank: 2,
            team: {
              id: 48,
              name: 'West Ham',
              logo: 'https://media-1.api-sports.io/football/teams/48.png'
            },
            points: 18,
            goalsDiff: 4,
            group: 'Premier League',
            form: 'WWD',
            status: 'same',
            description: 'Promotion - Champions League (Group Stage: )',
            all: {
              played: 3,
              win: 2,
              draw: 1,
              lose: 0,
              goals: {
                for: 7,
                against: 3
              }
            },
            home: {
              played: 1,
              win: 1,
              draw: 0,
              lose: 0,
              goals: {
                for: 3,
                against: 1
              }
            },
            away: {
              played: 2,
              win: 1,
              draw: 1,
              lose: 0,
              goals: {
                for: 4,
                against: 2
              }
            },
            update: '2023-08-29T00:00:00+00:00'
          },
          {
            rank: 3,
            team: {
              id: 47,
              name: 'Tottenham',
              logo: 'https://media-3.api-sports.io/football/teams/47.png'
            },
            points: 7,
            goalsDiff: 4,
            group: 'Premier League',
            form: 'WWD',
            status: 'same',
            description: 'Promotion - Champions League (Group Stage: )',
            all: {
              played: 3,
              win: 2,
              draw: 1,
              lose: 0,
              goals: {
                for: 6,
                against: 2
              }
            },
            home: {
              played: 1,
              win: 1,
              draw: 0,
              lose: 0,
              goals: {
                for: 2,
                against: 0
              }
            },
            away: {
              played: 2,
              win: 1,
              draw: 1,
              lose: 0,
              goals: {
                for: 4,
                against: 2
              }
            },
            update: '2023-08-29T00:00:00+00:00'
          },
          {
            rank: 4,
            team: {
              id: 40,
              name: 'Liverpool',
              logo: 'https://media-3.api-sports.io/football/teams/40.png'
            },
            points: 7,
            goalsDiff: 3,
            group: 'Premier League',
            form: 'WWD',
            status: 'same',
            description: 'Promotion - Champions League (Group Stage: )',
            all: {
              played: 3,
              win: 2,
              draw: 1,
              lose: 0,
              goals: {
                for: 6,
                against: 3
              }
            },
            home: {
              played: 1,
              win: 1,
              draw: 0,
              lose: 0,
              goals: {
                for: 3,
                against: 1
              }
            },
            away: {
              played: 2,
              win: 1,
              draw: 1,
              lose: 0,
              goals: {
                for: 3,
                against: 2
              }
            },
            update: '2023-08-29T00:00:00+00:00'
          },
          {
            rank: 5,
            team: {
              id: 42,
              name: 'Arsenal',
              logo: 'https://media-2.api-sports.io/football/teams/42.png'
            },
            points: 7,
            goalsDiff: 2,
            group: 'Premier League',
            form: 'DWW',
            status: 'same',
            description: 'Promotion - Europa League (Group Stage: )',
            all: {
              played: 3,
              win: 2,
              draw: 1,
              lose: 0,
              goals: {
                for: 5,
                against: 3
              }
            },
            home: {
              played: 2,
              win: 1,
              draw: 1,
              lose: 0,
              goals: {
                for: 4,
                against: 3
              }
            },
            away: {
              played: 1,
              win: 1,
              draw: 0,
              lose: 0,
              goals: {
                for: 1,
                against: 0
              }
            },
            update: '2023-08-29T00:00:00+00:00'
          },
          {
            rank: 6,
            team: {
              id: 51,
              name: 'Brighton',
              logo: 'https://media-2.api-sports.io/football/teams/51.png'
            },
            points: 6,
            goalsDiff: 4,
            group: 'Premier League',
            form: 'LWW',
            status: 'same',
            description: null,
            all: {
              played: 3,
              win: 2,
              draw: 0,
              lose: 1,
              goals: {
                for: 9,
                against: 5
              }
            },
            home: {
              played: 2,
              win: 1,
              draw: 0,
              lose: 1,
              goals: {
                for: 5,
                against: 4
              }
            },
            away: {
              played: 1,
              win: 1,
              draw: 0,
              lose: 0,
              goals: {
                for: 4,
                against: 1
              }
            },
            update: '2023-08-29T00:00:00+00:00'
          },
          {
            rank: 7,
            team: {
              id: 66,
              name: 'Aston Villa',
              logo: 'https://media-1.api-sports.io/football/teams/66.png'
            },
            points: 6,
            goalsDiff: 2,
            group: 'Premier League',
            form: 'WWL',
            status: 'same',
            description: null,
            all: {
              played: 3,
              win: 2,
              draw: 0,
              lose: 1,
              goals: {
                for: 8,
                against: 6
              }
            },
            home: {
              played: 1,
              win: 1,
              draw: 0,
              lose: 0,
              goals: {
                for: 4,
                against: 0
              }
            },
            away: {
              played: 2,
              win: 1,
              draw: 0,
              lose: 1,
              goals: {
                for: 4,
                against: 6
              }
            },
            update: '2023-08-29T00:00:00+00:00'
          },
          {
            rank: 8,
            team: {
              id: 33,
              name: 'Manchester United',
              logo: 'https://media-2.api-sports.io/football/teams/33.png'
            },
            points: 6,
            goalsDiff: 0,
            group: 'Premier League',
            form: 'WLW',
            status: 'same',
            description: null,
            all: {
              played: 3,
              win: 2,
              draw: 0,
              lose: 1,
              goals: {
                for: 4,
                against: 4
              }
            },
            home: {
              played: 2,
              win: 2,
              draw: 0,
              lose: 0,
              goals: {
                for: 4,
                against: 2
              }
            },
            away: {
              played: 1,
              win: 0,
              draw: 0,
              lose: 1,
              goals: {
                for: 0,
                against: 2
              }
            },
            update: '2023-08-29T00:00:00+00:00'
          },
          {
            rank: 9,
            team: {
              id: 55,
              name: 'Brentford',
              logo: 'https://media-2.api-sports.io/football/teams/55.png'
            },
            points: 5,
            goalsDiff: 3,
            group: 'Premier League',
            form: 'DWD',
            status: 'same',
            description: null,
            all: {
              played: 3,
              win: 1,
              draw: 2,
              lose: 0,
              goals: {
                for: 6,
                against: 3
              }
            },
            home: {
              played: 2,
              win: 0,
              draw: 2,
              lose: 0,
              goals: {
                for: 3,
                against: 3
              }
            },
            away: {
              played: 1,
              win: 1,
              draw: 0,
              lose: 0,
              goals: {
                for: 3,
                against: 0
              }
            },
            update: '2023-08-29T00:00:00+00:00'
          },
          {
            rank: 10,
            team: {
              id: 49,
              name: 'Chelsea',
              logo: 'https://media-2.api-sports.io/football/teams/49.png'
            },
            points: 4,
            goalsDiff: 1,
            group: 'Premier League',
            form: 'WLD',
            status: 'same',
            description: null,
            all: {
              played: 3,
              win: 1,
              draw: 1,
              lose: 1,
              goals: {
                for: 5,
                against: 4
              }
            },
            home: {
              played: 2,
              win: 1,
              draw: 1,
              lose: 0,
              goals: {
                for: 4,
                against: 1
              }
            },
            away: {
              played: 1,
              win: 0,
              draw: 0,
              lose: 1,
              goals: {
                for: 1,
                against: 3
              }
            },
            update: '2023-08-29T00:00:00+00:00'
          },
          {
            rank: 11,
            team: {
              id: 52,
              name: 'Crystal Palace',
              logo: 'https://media-3.api-sports.io/football/teams/52.png'
            },
            points: 4,
            goalsDiff: 0,
            group: 'Premier League',
            form: 'DLW',
            status: 'same',
            description: null,
            all: {
              played: 3,
              win: 1,
              draw: 1,
              lose: 1,
              goals: {
                for: 2,
                against: 2
              }
            },
            home: {
              played: 1,
              win: 0,
              draw: 0,
              lose: 1,
              goals: {
                for: 0,
                against: 1
              }
            },
            away: {
              played: 2,
              win: 1,
              draw: 1,
              lose: 0,
              goals: {
                for: 2,
                against: 1
              }
            },
            update: '2023-08-29T00:00:00+00:00'
          },
          {
            rank: 12,
            team: {
              id: 36,
              name: 'Fulham',
              logo: 'https://media-3.api-sports.io/football/teams/36.png'
            },
            points: 4,
            goalsDiff: -2,
            group: 'Premier League',
            form: 'DLW',
            status: 'same',
            description: null,
            all: {
              played: 3,
              win: 1,
              draw: 1,
              lose: 1,
              goals: {
                for: 3,
                against: 5
              }
            },
            home: {
              played: 1,
              win: 0,
              draw: 0,
              lose: 1,
              goals: {
                for: 0,
                against: 3
              }
            },
            away: {
              played: 2,
              win: 1,
              draw: 1,
              lose: 0,
              goals: {
                for: 3,
                against: 2
              }
            },
            update: '2023-08-29T00:00:00+00:00'
          },
          {
            rank: 13,
            team: {
              id: 34,
              name: 'Newcastle',
              logo: 'https://media-3.api-sports.io/football/teams/34.png'
            },
            points: 3,
            goalsDiff: 2,
            group: 'Premier League',
            form: 'LLW',
            status: 'same',
            description: null,
            all: {
              played: 3,
              win: 1,
              draw: 0,
              lose: 2,
              goals: {
                for: 6,
                against: 4
              }
            },
            home: {
              played: 2,
              win: 1,
              draw: 0,
              lose: 1,
              goals: {
                for: 6,
                against: 3
              }
            },
            away: {
              played: 1,
              win: 0,
              draw: 0,
              lose: 1,
              goals: {
                for: 0,
                against: 1
              }
            },
            update: '2023-08-29T00:00:00+00:00'
          },
          {
            rank: 14,
            team: {
              id: 65,
              name: 'Nottingham Forest',
              logo: 'https://media-2.api-sports.io/football/teams/65.png'
            },
            points: 3,
            goalsDiff: -1,
            group: 'Premier League',
            form: 'LWL',
            status: 'same',
            description: null,
            all: {
              played: 3,
              win: 1,
              draw: 0,
              lose: 2,
              goals: {
                for: 5,
                against: 6
              }
            },
            home: {
              played: 1,
              win: 1,
              draw: 0,
              lose: 0,
              goals: {
                for: 2,
                against: 1
              }
            },
            away: {
              played: 2,
              win: 0,
              draw: 0,
              lose: 2,
              goals: {
                for: 3,
                against: 5
              }
            },
            update: '2023-08-29T00:00:00+00:00'
          },
          {
            rank: 15,
            team: {
              id: 39,
              name: 'Wolves',
              logo: 'https://media-1.api-sports.io/football/teams/39.png'
            },
            points: 3,
            goalsDiff: -3,
            group: 'Premier League',
            form: 'WLL',
            status: 'same',
            description: null,
            all: {
              played: 3,
              win: 1,
              draw: 0,
              lose: 2,
              goals: {
                for: 2,
                against: 5
              }
            },
            home: {
              played: 1,
              win: 0,
              draw: 0,
              lose: 1,
              goals: {
                for: 1,
                against: 4
              }
            },
            away: {
              played: 2,
              win: 1,
              draw: 0,
              lose: 1,
              goals: {
                for: 1,
                against: 1
              }
            },
            update: '2023-08-29T00:00:00+00:00'
          },
          {
            rank: 16,
            team: {
              id: 35,
              name: 'Bournemouth',
              logo: 'https://media-2.api-sports.io/football/teams/35.png'
            },
            points: 1,
            goalsDiff: -4,
            group: 'Premier League',
            form: 'LLD',
            status: 'same',
            description: null,
            all: {
              played: 3,
              win: 0,
              draw: 1,
              lose: 2,
              goals: {
                for: 2,
                against: 6
              }
            },
            home: {
              played: 2,
              win: 0,
              draw: 1,
              lose: 1,
              goals: {
                for: 1,
                against: 3
              }
            },
            away: {
              played: 1,
              win: 0,
              draw: 0,
              lose: 1,
              goals: {
                for: 1,
                against: 3
              }
            },
            update: '2023-08-29T00:00:00+00:00'
          },
          {
            rank: 17,
            team: {
              id: 62,
              name: 'Sheffield Utd',
              logo: 'https://media-1.api-sports.io/football/teams/62.png'
            },
            points: 0,
            goalsDiff: -3,
            group: 'Premier League',
            form: 'LLL',
            status: 'same',
            description: null,
            all: {
              played: 3,
              win: 0,
              draw: 0,
              lose: 3,
              goals: {
                for: 2,
                against: 5
              }
            },
            home: {
              played: 2,
              win: 0,
              draw: 0,
              lose: 2,
              goals: {
                for: 1,
                against: 3
              }
            },
            away: {
              played: 1,
              win: 0,
              draw: 0,
              lose: 1,
              goals: {
                for: 1,
                against: 2
              }
            },
            update: '2023-08-29T00:00:00+00:00'
          },
          {
            rank: 18,
            team: {
              id: 44,
              name: 'Burnley',
              logo: 'https://media-2.api-sports.io/football/teams/44.png'
            },
            points: 0,
            goalsDiff: -5,
            group: 'Premier League',
            form: 'LL',
            status: 'same',
            description: 'Relegation - Championship',
            all: {
              played: 2,
              win: 0,
              draw: 0,
              lose: 2,
              goals: {
                for: 1,
                against: 6
              }
            },
            home: {
              played: 2,
              win: 0,
              draw: 0,
              lose: 2,
              goals: {
                for: 1,
                against: 6
              }
            },
            away: {
              played: 0,
              win: 0,
              draw: 0,
              lose: 0,
              goals: {
                for: 0,
                against: 0
              }
            },
            update: '2023-08-29T00:00:00+00:00'
          },
          {
            rank: 19,
            team: {
              id: 1359,
              name: 'Luton',
              logo: 'https://media-3.api-sports.io/football/teams/1359.png'
            },
            points: 0,
            goalsDiff: -6,
            group: 'Premier League',
            form: 'LL',
            status: 'same',
            description: 'Relegation - Championship',
            all: {
              played: 2,
              win: 0,
              draw: 0,
              lose: 2,
              goals: {
                for: 1,
                against: 7
              }
            },
            home: {
              played: 0,
              win: 0,
              draw: 0,
              lose: 0,
              goals: {
                for: 0,
                against: 0
              }
            },
            away: {
              played: 2,
              win: 0,
              draw: 0,
              lose: 2,
              goals: {
                for: 1,
                against: 7
              }
            },
            update: '2023-08-29T00:00:00+00:00'
          },
          {
            rank: 20,
            team: {
              id: 45,
              name: 'Everton',
              logo: 'https://media-2.api-sports.io/football/teams/45.png'
            },
            points: 0,
            goalsDiff: -6,
            group: 'Premier League',
            form: 'LLL',
            status: 'same',
            description: 'Relegation - Championship',
            all: {
              played: 3,
              win: 0,
              draw: 0,
              lose: 3,
              goals: {
                for: 0,
                against: 6
              }
            },
            home: {
              played: 2,
              win: 0,
              draw: 0,
              lose: 2,
              goals: {
                for: 0,
                against: 2
              }
            },
            away: {
              played: 1,
              win: 0,
              draw: 0,
              lose: 1,
              goals: {
                for: 0,
                against: 4
              }
            },
            update: '2023-08-29T00:00:00+00:00'
          }
        ]
      ]
    }
  }
]

interface FixtureInfo {
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
  status: {
    long: string
    short: string
    elapsed: number | null
  }
}

type FixtureLeague = League & {
  round: string
}

type FixtureTeam = Team & {
  winner: boolean | null
}

interface FixtureGoals {
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

type FootballMatch = {
  fixture: FixtureInfo
  league: FixtureLeague
  teams: {
    home: FixtureTeam
    away: FixtureTeam
  }
  goals: FixtureGoals
  score: FixtureScore
}

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
