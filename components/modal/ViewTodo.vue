<template>
  <b-modal id="modal-view-todo" title="View Todo" hide-footer>
    <b-card>
      <b-card-body>
        <b-card-text>{{ todo.title }}</b-card-text>
        <b-card-footer>
          {{ todo.description }}
        </b-card-footer>
      </b-card-body>
    </b-card>
  </b-modal>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { Todo } from '~/types/todo'

export default defineComponent({
  name: 'ModalViewTodo',
  setup() {

    const todo = ref<Todo>({
      _id: '',
      title: '',
      description: '',
      createdAt: '',
      updatedAt: '',
      user_id: ''
    })

    return {
      todo
    }
  }
});

</script>