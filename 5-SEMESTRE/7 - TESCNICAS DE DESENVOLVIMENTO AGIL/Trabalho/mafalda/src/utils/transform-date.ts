export const transformDate = (date: string) => {
  const parseDate = date.split('/')
  return new Date(`${parseDate[2]}-${parseDate[1]}-${parseDate[0]}`).toISOString()
}