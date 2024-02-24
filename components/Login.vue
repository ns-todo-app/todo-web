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
import { computed, defineComponent, onMounted, reactive, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'LoginForm',
  layout: 'empty',
  setup() {
    const { $auth } = useContext()

    const form = reactive({
      username: 'wick1993',
      password: 'WickPassword'
    })

    const onSubmit = async (evt: Event) => {
      evt.preventDefault()
      console.log(form)
      try {
        await $auth.loginWith('local', { data: form })
      } catch (error) {
        console.error(error)
      }
    }



    const reset = () => {
      form.username = ''
      form.password = ''
    }

    onMounted(() => {
      // reset()
    })

    return {
      form,
      onSubmit,
    }
  }
})
</script>