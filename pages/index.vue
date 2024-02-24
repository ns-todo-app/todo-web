<template>
    <div class='bg-gray-200' style='flex: 1'>
    <b-container fluid>
      <b-row>
        <b-col>
          <h1 class="text-center">Todo App</h1>
        </b-col>
      </b-row>

      <b-row class="justify-content-center">
        <b-col cols="12" md="6">
          <b-card title="Login" class="my-3 rounded-shadow">
            <Login />
          </b-card>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style scoped>
  .container-fluid {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .bg-gray-200 {
    background-color: #f8f9fa;
  }
  .rounded-shadow {
    border-radius: 10px; /* Adjust the border-radius value to change the roundness */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adjust shadow values as needed */
  }
</style>
