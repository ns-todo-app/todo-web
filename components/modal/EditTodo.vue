<template>
  <div>
  <b-modal
      v-model="isOpenEditTodoModal"
      title="Edit Todo"
      no-close-on-backdrop
      no-close-on-esc
      hide-header-close
      hide-header
      hide-footer
  >
    <ValidationObserver v-slot='{ handleSubmit }'>
      <b-form @submit.prevent='handleSubmit(submit)'>
        <ValidationProvider
          v-slot='validationContext'
          rules='required'
          :custom-messages="{ required: 'Title is required' }"
        >
          <b-form-group
            label="Title"
            :invalid-feedback="validationContext.errors[0]"
          >
            <b-form-input
                v-model="todo.title"
                :state="getValidationState(validationContext)"
            ></b-form-input>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider
          v-slot='validationContext'
          rules='required'
          :custom-messages="{ required: 'Description is required' }"
        >
        <b-form-group
          label="Description"
          :invalid-feedback="validationContext.errors[0]"
        >
          <b-textarea
              v-model="todo.description"
              :state="getValidationState(validationContext)"
              rows="5"
          ></b-textarea>
        </b-form-group>
        </ValidationProvider>

        <div>
          <b-button type="submit" variant="success" class="w-100">Save edit</b-button>
          <b-button variant="light" @click="isOpenEditTodoModal = false" class="w-100 mt-1">Cancel</b-button>
          <b-button variant="danger" @click="isOpenDeleteConfirmModal = true" class="w-100 mt-1">Delete</b-button>
        </div>
      </b-form>
    </ValidationObserver>
  </b-modal>

  <b-modal
    v-model="isOpenDeleteConfirmModal"
    no-close-on-backdrop
    no-close-on-esc
    hide-header-close
    hide-footer
    hide-title
  >
    <div class="d-block text-center">
      <h6>Are you sure that you want to permanently delete this item?</h6>
    </div>

    <div class="text-center">
      <b-button variant="success" class="mt-3" @click="handleDeleteTodo">Yes</b-button>
      <b-button variant="light" class="mt-3" @click="isOpenDeleteConfirmModal = false">No</b-button>
    </div>
  </b-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { useTodoApi } from '~/api/todo';
import { useTodoState } from '~/states/todo'
import { getValidationState } from '~/utils/validation'

export default defineComponent({
  name: 'ModalEditTodo',
  methods: { getValidationState },
  components: {
    ValidationObserver,
    ValidationProvider
  },
  setup() {
    const { updateTodo, deleteTodo } = useTodoApi()
    const { isOpenEditTodoModal, todo, fetchTodos } = useTodoState()
    const isOpenDeleteConfirmModal = ref(false)

    const submit = async () => {
      try {
        await updateTodo(
          todo.value._id,
          {
          title: todo.value.title,
          description: todo.value.description
        })
        await fetchTodos()
        isOpenEditTodoModal.value = false
      }catch (error) {
        console.error(error)
      }
    }

    const handleDeleteTodo = async () => {
      try {
        await deleteTodo(todo.value._id)
        await fetchTodos()
        isOpenDeleteConfirmModal.value = false
        isOpenEditTodoModal.value = false
      }catch (error) {
        console.error(error)
      }
    }

    return {
      todo,
      isOpenEditTodoModal,
      submit,
      handleDeleteTodo,
      isOpenDeleteConfirmModal
    }
  }
});

</script>