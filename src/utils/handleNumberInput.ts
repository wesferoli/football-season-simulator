export function handleNumberInput(e: Event) {
  const target = e.target as HTMLInputElement

  target.value = target.value.replace(/[^0-9]/g, '')
}
