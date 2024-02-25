import { ref } from '@nuxtjs/composition-api'
import { Todo } from '~/types/todo'
import { useTodoApi } from '~/api/todo'

const todos = ref<Todo[]>([])
const todo = ref<Todo>({
  _id: '',
  title: '',
  description: '',
  createdAt: '',
  updatedAt: '',
  user_id: ''
})
const isOpenAddTodoModal = ref(false)
const isOpenViewTodoModal = ref(false)
const isOpenEditTodoModal = ref(false)

export const useTodoState = () => {
  const { getTodos, getTodo } = useTodoApi()

  const fetchTodos = async () => {
    try {
      todos.value = await getTodos()
    } catch (error) {
      console.error(error)
    }
  }

  const fetchTodo = async (id: string) => {
    try {
      todo.value = await getTodo(id)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    fetchTodos,
    fetchTodo,
    todos,
    todo,
    isOpenAddTodoModal,
    isOpenViewTodoModal,
    isOpenEditTodoModal
  }
}