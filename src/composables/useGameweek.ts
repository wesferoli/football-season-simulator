import type { FootballMatch } from '@/utils/mockData'
import { ref } from 'vue'

export function useGameweek(gameweek: FootballMatch[]) {
  const data = ref<FootballMatch[]>([])

  setTimeout(() => {
    data.value = gameweek
  }, 1500)

  return { data }
}
