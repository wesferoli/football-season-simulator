import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'
import { ref } from 'vue'

export function useFetch<TData>(url: string, config: Omit<AxiosRequestConfig, 'url'> = {}) {
  const data = ref<TData | null>(null)
  const response = ref<AxiosResponse>()
  const error = ref<unknown>(null)
  const loading = ref(false)

  const fetch = async () => {
    loading.value = true

    try {
      const result = await axios.get(url, { ...config })
      response.value = result
      data.value = result.data
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  fetch()

  return { data, response, error, loading, fetch }
}
