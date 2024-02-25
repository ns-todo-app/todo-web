<template>
  <div class='bg-gray-200 p-10' style='flex: 1'>
    <b-container fluid>

      <b-row class="justify-content-center mt-20">
        <b-col cols="12" md="6">
          <b-card v-if="isLoggedIn" title="Welcome" class="my-3 rounded-shadow">
            <div>
              <b-alert show variant="success">
                You are logged in!
              </b-alert>
            </div>

            <div class="text-right mt-20">
            <b-button to="/todos" variant="success">
              Go to Todos >>
            </b-button>
            </div>
          </b-card>
          <b-card v-else title="Login" class="my-3 rounded-shadow">
            <Login />
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { computed, useContext } from '@nuxtjs/composition-api'

export default Vue.extend({
  name: 'IndexPage',
  auth: false,
  layout: 'empty',
  setup() {
    const { $auth } = useContext()

    const isLoggedIn = computed(() => $auth.loggedIn)

    const logout = () => {
      $auth.logout()
    }

    return {
      isLoggedIn,
      logout
    }
  }
})
</script>

<style scoped>
  .container-fluid {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .rounded-shadow {
    border-radius: 10px; /* Adjust the border-radius value to change the roundness */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adjust shadow values as needed */
  }
</style>
