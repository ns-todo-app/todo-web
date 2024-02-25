<template>
  <div>
    <ValidationObserver v-slot='{ handleSubmit }'>
      <b-form @submit.prevent='handleSubmit(onSubmit)'>

        <ValidationProvider
          v-slot='validationContext'
          rules='required'
          :custom-messages="{ required: 'Username is required' }"
        >
          <b-form-group
              label="Username:"
              :invalid-feedback="validationContext.errors[0]"
          >
            <b-form-input
                v-model="form.username"
                placeholder="Enter username"
                :state="getValidationState(validationContext)"
            ></b-form-input>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider
          v-slot='validationContext'
          rules='required'
          :custom-messages="{ required: 'Password is required' }"
        >
          <b-form-group
            label="Password:"
            :invalid-feedback="validationContext.errors[0]"
          >
            <b-form-input
                v-model="form.password"
                placeholder="Enter password"
                type="password"
                :state="getValidationState(validationContext)"
            ></b-form-input>
          </b-form-group>
        </ValidationProvider>

        <div class="text-center">
          <b-button type="submit" variant="success">Submit</b-button>
        </div>
      </b-form>
    </ValidationObserver>

  </div>
</template>

<script lang="ts">
import {  defineComponent, onMounted, reactive, useContext } from '@nuxtjs/composition-api'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { getValidationState } from '~/utils/validation'

export default defineComponent({
  name: 'LoginForm',
  methods: { getValidationState },
  components: {
    ValidationObserver,
    ValidationProvider
  },
  setup() {
    const { $auth, $toast } = useContext()

    const form = reactive({
      username: '',
      password: ''
    })

    const onSubmit = async () => {
      try {
        await $auth.loginWith('local', { data: form })
        $toast.success('Successfully authenticated')
      } catch (error: any) {
        if(error?.response?.status === 401)
          $toast.error('Invalid username or password!')
        else
          $toast.error('Oops...Something went wrong!')

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