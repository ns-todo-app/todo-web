<template>
  <div>
    <template v-for="todo in todos">
      <b-card :key="todo._id" class="rounded-10 shadow-lg mb-20 todo-card" no-body @click="handleViewTodo(todo._id)" >
        <b-card-body>
          <b-card-text>{{ todo.title }}</b-card-text>
          <b-card-text class="text-gray-500">{{ todo.description }}</b-card-text>
        </b-card-body>
      </b-card>
    </template>

    <ModalAddTodo />
    <ModalViewTodo />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'
import { useTodoState } from '~/states/todo'
export default defineComponent({
  name: 'TodoIndexPage',
  setup() {
    const { fetchTodos, fetchTodo, todos, isOpenViewTodoModal } = useTodoState()

    onMounted(fetchTodos)

    const handleViewTodo = (id: string) => {
      fetchTodo(id)
      isOpenViewTodoModal.value = true
    }

    return {
      todos,
      handleViewTodo
    }
  }
})
</script>

<style scoped>
.todo-card {
  cursor: pointer;
}
.todo-card:hover {
  background-color: #f5f5f5;
}
</style>