import type { FixtureShortStatus } from '@/utils/mockData'

export const isMatchFinished = (status: FixtureShortStatus) => {
  return status === 'FT'
}
