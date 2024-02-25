<template>
  <b-modal
      v-model="isOpenAddTodoModal"
      title="New Todo"
      no-close-on-backdrop
      no-close-on-esc
      hide-header-close
      hide-footer
  >
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <b-form-group label="Title">
        <b-form-input
            v-model="formTodo.title"
            placeholder="Enter title here..."
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Description">
        <b-form-input
            v-model="formTodo.description"
            placeholder="Enter description here..."
        ></b-form-input>
      </b-form-group>

      <div>
        <b-btn type="submit" variant="success" class="w-100">Save</b-btn>
        <b-btn variant="light" @click="isOpenAddTodoModal = false" class="w-100 mt-1">Cancel</b-btn>
      </div>
    </form>
  </b-modal>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from '@nuxtjs/composition-api'
import { useTodoApi } from '~/api/todo';
import { useTodoState } from '~/states/todo'

export default defineComponent({
  name: 'ModalAddTodo',
  setup() {
    const { createTodo } = useTodoApi()
    const { isOpenAddTodoModal, fetchTodos } = useTodoState()

    const formTodo = reactive({
      title: '',
      description: ''
    })

    const resetForm = () => {
      formTodo.title = ''
      formTodo.description = ''
    }

    const handleSubmit = async () => {
      try {
        await createTodo({
          title: formTodo.title,
          description: formTodo.description
        })

        resetForm()
        await fetchTodos()
        isOpenAddTodoModal.value = false
      }catch (error) {
        console.error(error)
      }
    }

    onMounted(() => {
      resetForm()
    })

    return {
      formTodo,
      isOpenAddTodoModal,
      handleSubmit
    }
  }
});

</script>