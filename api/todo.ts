import { useContext } from '@nuxtjs/composition-api'

interface TodoResponse {
  id: string
  title: string
  completed: boolean
}

export const useTodoApi = () => {
  const { $axios } = useContext()

  const getTodos = async () => {
    const response = await $axios.request<TodoResponse>({
      url: '/todos',
      method: 'get'
    })
    return response.data
  }

  const createTodo = async (data: any) => {
    const response = await $axios.request<TodoResponse>({
      url: '/todos',
      method: 'post',
      data
    })
    return response.data
  }

  const updateTodo = async (id: string, data: any) => {
    const response = await $axios.request<TodoResponse>({
      url: `/todos/${id}`,
      method: 'put',
      data
    })
    return response.data
  }

  const deleteTodo = async (id: string) => {
    const response = await $axios.request<TodoResponse>({
      url: `/todos/${id}`,
      method: 'delete'
    })
    return response.data
  }

  return {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
  }
}