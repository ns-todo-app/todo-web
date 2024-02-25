<template>
  <b-modal
      v-model="isOpenAddTodoModal"
      title="New Todo"
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
                v-model="formTodo.title"
                placeholder="Enter title here..."
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
              v-model="formTodo.description"
              placeholder="Enter description here..."
              :state="getValidationState(validationContext)"
              rows="5"
          ></b-textarea>
        </b-form-group>
        </ValidationProvider>

        <div>
          <b-button type="submit" variant="success" class="w-100">Save</b-button>
          <b-button variant="light" @click="isOpenAddTodoModal = false" class="w-100 mt-1">Cancel</b-button>
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
  name: 'ModalAddTodo',
  methods: { getValidationState },
  components: {
    ValidationObserver,
    ValidationProvider
  },
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

    const submit = async () => {
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
      submit
    }
  }
});

</script>