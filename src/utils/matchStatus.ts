import type { FixtureShortStatus } from './mockData'

export const isMatchFinished = (status: FixtureShortStatus) => {
  return status === 'FT'
}
