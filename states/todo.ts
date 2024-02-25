import { ref } from '@nuxtjs/composition-api'
import { Todo } from '~/types/todo'
import { useTodoApi } from '~/api/todo'

const todos = ref<Todo[]>([])
const isOpenAddTodoModal = ref(false)

export const useTodoState = () => {
  const { getTodos } = useTodoApi()

  const fetchTodos = async () => {
    try {
      todos.value = await getTodos()
    } catch (error) {
      console.error(error)
    }
  }

  return {
    fetchTodos,
    todos,
    isOpenAddTodoModal
  }
}