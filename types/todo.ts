export type Todo = {
  _id: string,
  title: string,
  description: string,
  user_id: string,
  createdAt: string,
  updatedAt: string
}

export type TodoCreate = {
  title: string,
  description: string,
}

export type TodoUpdate = TodoCreate