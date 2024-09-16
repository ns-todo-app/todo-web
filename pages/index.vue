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

            <div>
              Img
              <b-img src="https://wick-uploads.s3.ap-southeast-1.amazonaws.com/2b8521bb-5a2b-4d72-9348-ed37385e968a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIASDQW7AT4PZICIQWP%2F20240312%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240312T064726Z&X-Amz-Expires=60&X-Amz-Signature=e84f54bf535d80d340f4166cb3d177e44a5f32b9e4d45592d33cb141728212d6&X-Amz-SignedHeaders=host&x-id=GetObject" fluid alt="Responsive image" />
            </div>
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
