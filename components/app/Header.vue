<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand href="#">TODO</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse v-if="isLoggedIn" id="nav-collapse" is-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <em>Hello</em>
            </template>
            <b-dropdown-item @click="goToTodos() ">Todo List</b-dropdown-item>
            <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useContext, useRouter } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'AppHeader',
  setup() {
    const router = useRouter()
    const { $auth } = useContext()

    const goToTodos = () => {
      router.push('/todos')
    }

    const logout = () => {
      $auth.logout()
    }

    const isLoggedIn = computed(() => $auth.loggedIn)

    return {
      goToTodos,
      logout,
      isLoggedIn
    }
  },
})
</script>