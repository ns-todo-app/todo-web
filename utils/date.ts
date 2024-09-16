import dayjs from 'dayjs'

export const dateFormat = (date: string) => {
  if(!date) return ''
  return dayjs(date).format('DD MMM YYYY')
}