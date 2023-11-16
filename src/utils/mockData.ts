type Team = {
  id: number
  name: string
  logo: string
}

type Goals = {
  for: number
  against: number
}

type TeamStats = {
  played: number
  win: number
  draw: number
  lose: number
  goals: Goals
}

export type TeamStanding = {
  rank: number
  team: Team
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

type League = {
  id: number
  name: string
  country: string
  logo: string
  flag: string
  season: number
  standings: TeamStanding[][]
}

type LeagueTableEntry = {
  league: League
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
