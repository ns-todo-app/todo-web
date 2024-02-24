<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group
          id="input-group-1"
          label="Enter Username:"
          label-for="input-1"
      >
        <b-form-input
            id="input-1"
            v-model="form.username"
            placeholder="Enter username"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Enter Password:" label-for="input-2">
        <b-form-input
            id="input-2"
            v-model="form.password"
            placeholder="Enter password"
            type="password"
            required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'LoginForm',
  layout: 'empty',
  setup() {
    const form = reactive({
      username: '',
      password: ''
    })

    const onSubmit = (evt: Event) => {
      evt.preventDefault()
      console.log(form)
    }

    const reset = () => {
      form.username = ''
      form.password = ''
    }

    onMounted(() => {
      reset()
    })

    return {
      form,
      onSubmit,
    }
  }
})
</script>