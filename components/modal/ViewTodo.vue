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

    <div class="mt-20 d-flex justify-content-between">
      <b-button size="sm" variant="success" @click="handleClickEdit()">Edit</b-button>
      <b-button size="sm" variant="light" @click="isOpenViewTodoModal = false">Close</b-button>
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
    const { isOpenViewTodoModal, isOpenEditTodoModal, todo }  =  useTodoState()

    const handleClickEdit = () => {
      isOpenViewTodoModal.value = false
      isOpenEditTodoModal.value = true
    }

    return {
      isOpenViewTodoModal,
      handleClickEdit,
      todo,
    }
  }
});

</script>