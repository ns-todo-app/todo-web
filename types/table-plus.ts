export type KeyName = 'id' | 'no' | 'title' | 'desc' | 'date'

export type Column = {
  key: KeyName
  name: string
}

export type DataItem = string[] | number[]

export type JsonData = {
  columns: Column[]
  data: DataItem[]
}

export type Item = {
  [key in KeyName]: string | number
}