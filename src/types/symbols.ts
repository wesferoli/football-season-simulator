import type { InjectionKey } from 'vue'
import type { FootballMatch } from '@/utils/mockData'

export const FixturesKey: InjectionKey<FootballMatch[]> = Symbol('fixtures')
