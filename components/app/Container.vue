<template>
  <b-container class="fluid-container" fluid>
    <slot></slot>
  </b-container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'AppContainer'
})
</script>