<template>
  <div class='bg-gray-200' style='flex: 1'>
    <b-container fluid>

      <b-row>
        <b-col>
          <h1 class="text-center">Todo Index</h1>
        </b-col>
      </b-row>

      <b-card v-for="todo in todos" :key="todo._id">
        <b-card-body>
          <b-card-text>{{ todo.title }}</b-card-text>
          <b-card-footer>
            {{ todo.description }}
          </b-card-footer>
        </b-card-body>
        </b-card>

    </b-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'
import { useTodoApi } from '~/api/todo'
import { Todo } from '~/types/todo'

export default defineComponent({
  name: 'TodoIndexPage',
  setup() {
    const todos = ref<Todo[]>([])
    const { getTodos } = useTodoApi()

    const fetchTodos = async () => {
      try {
        todos.value = await getTodos()
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(fetchTodos)

    return {
      todos
    }
  }
})

</script>