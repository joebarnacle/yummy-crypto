export const formatDate = (isoDateStr: string) => {
  const date = new Date(isoDateStr)

  return date.toDateString().slice(4)
}
