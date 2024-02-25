<template>
  <div>
    <div class="footer w-100 text-center">
      <b-button variant="success" class="text-white rounded-20" @click="() => isOpenAddTodoModal = true">
        + Add Todo
      </b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useTodoState } from '~/states/todo'

export default defineComponent({
  name: 'AppFooter',
  setup() {
    const { isOpenAddTodoModal } = useTodoState()

    return {
      isOpenAddTodoModal
    }
  }
})
</script>

<style scoped>
.footer{
  position:fixed;
  bottom:0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}

.btn-success:hover {
  font-weight: bold;
  margin-bottom: 2px;
}
</style>