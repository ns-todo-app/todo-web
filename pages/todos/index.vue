<template>
  <div>
    <b-card v-for="todo in todos" :key="todo._id" class="rounded-10 shadow-lg mb-20">
      <b-card-body>
        <b-card-text>{{ todo.title }}</b-card-text>
        <b-card-footer>
          {{ todo.description }}
        </b-card-footer>
      </b-card-body>
    </b-card>

    <ModalAddTodo />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api'
import { useTodoState } from '~/states/todo'

export default defineComponent({
  name: 'TodoIndexPage',
  setup() {
    const { fetchTodos, todos } = useTodoState()

    onMounted(fetchTodos)

    return {
      todos
    }
  }
})

</script>