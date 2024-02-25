<template>
  <b-modal
      v-model="isOpenEditTodoModal"
      title="Edit Todo"
      no-close-on-backdrop
      no-close-on-esc
      hide-header-close
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
        </div>
      </b-form>
    </ValidationObserver>
  </b-modal>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from '@nuxtjs/composition-api'
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
    const { updateTodo } = useTodoApi()
    const { isOpenEditTodoModal, todo, fetchTodos } = useTodoState()

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

    return {
      todo,
      isOpenEditTodoModal,
      submit
    }
  }
});

</script>