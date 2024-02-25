<template>
  <b-modal
    v-model="isOpenViewTodoModal"
    :title="todo.title"
    hide-header-close
    hide-footer
  >
    <div class="text-gray-500">
      {{ todo.description }}
    </div>

    <div class="mt-30 d-flex justify-content-between text-10 text-gray-600">
      <div>
        <div class="text-gray-500">Created At</div>
        <div>{{ dateFormat(todo.createdAt) }}</div>
      </div>
      <div>
        <div class="text-gray-500">Updated At</div>
        <div>{{ dateFormat(todo.updatedAt) }}</div>
      </div>
    </div>

  </b-modal>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useTodoState } from '~/states/todo'
import { dateFormat } from '~/utils/date'

export default defineComponent({
  name: 'ModalViewTodo',
  methods: { dateFormat },
  setup() {
    const { isOpenViewTodoModal, todo }  =  useTodoState()

    return {
      isOpenViewTodoModal,
      todo,
    }
  }
});

</script>