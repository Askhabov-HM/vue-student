<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const drawer = ref(true)

function logout() {
  localStorage.setItem('authed', 'false')
  router.push('/')
}
</script>

<template>
  <v-app-bar elevation="1">
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-toolbar-title>Кабинет студента</v-toolbar-title>
    <v-spacer />
    <v-btn variant="text" prepend-icon="mdi-logout" @click="logout">Выйти</v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" elevation="1">
    <v-list nav>
      <v-list-item title="Dashboard" to="/app/dashboard" prepend-icon="mdi-view-dashboard-outline" />
      <v-list-item title="Profile" to="/app/profile" prepend-icon="mdi-account-outline" />
    </v-list>
  </v-navigation-drawer>

  <v-main>
    <v-container class="py-6">
      <router-view />
    </v-container>
  </v-main>
</template>
