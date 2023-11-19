export const getDate = (datetime: string) => {
  const toJSDate = new Date(datetime)

  return toJSDate.toLocaleDateString('pt-BR')
}
export const getTime = (datetime: string) => {
  const toJSDate = new Date(datetime)

  return toJSDate.toLocaleTimeString('pt-BR').slice(0, 5)
}
