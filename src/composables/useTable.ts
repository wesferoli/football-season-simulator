import type { TeamStanding } from '@/utils/mockData'
import { ref } from 'vue'

export function useTable(mockData: TeamStanding[]) {
  const data = ref<TeamStanding[]>([])

  setTimeout(() => {
    data.value = mockData
  }, 1500)

  return { data }
}
