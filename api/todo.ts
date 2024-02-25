import { useContext } from '@nuxtjs/composition-api'
import { Todo } from '~/types/todo'

export const useTodoApi = () => {
  const { $axios } = useContext()

  const getTodos = async () => {
    const response = await $axios.request<Todo[]>({
      url: '/todos',
      method: 'get'
    })
    return response.data
  }

  const getTodo = async (id: string) => {
    const response = await $axios.request<Todo>({
      url: `/todos/${id}`,
      method: 'get'
    })
    return response.data
  }

  const createTodo = async (data: any) => {
    const response = await $axios.request<Todo>({
      url: '/todos',
      method: 'post',
      data
    })
    return response.data
  }

  const updateTodo = async (id: string, data: any) => {
    const response = await $axios.request<Todo>({
      url: `/todos/${id}`,
      method: 'put',
      data
    })
    return response.data
  }

  const deleteTodo = async (id: string) => {
    const response = await $axios.request<any>({
      url: `/todos/${id}`,
      method: 'delete'
    })
    return response.data
  }

  return {
    getTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
  }
}