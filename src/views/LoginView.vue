<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const login = () => {
  localStorage.setItem('authed', 'true')
  router.push('/app/counter')
}

const logout = () => localStorage.setItem('authed', 'false')
</script>

<template>
  <v-container class="py-6">
    <h1>Login</h1>
    <div class="d-flex ga-2 mt-4">
      <v-btn color="primary" @click="login">Login</v-btn>
      <v-btn variant="outlined" @click="logout">Logout</v-btn>
    </div>
  </v-container>
</template>
