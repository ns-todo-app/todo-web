<template>
  <div class='bg-gray-100' style='flex: 1'>

    <AppHeader />

    <b-container fluid="md" class="p-10">
      <Nuxt />
    </b-container>

  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'TableLayout',
})
</script>