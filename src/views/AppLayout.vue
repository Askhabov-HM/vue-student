<script setup lang="ts"></script>

<template>
  <v-app>
    <v-app-bar title="Vue Student — Counter" />
    <v-navigation-drawer permanent>
      <v-list nav>
        <v-list-item title="Counter" to="/app/counter" />
        <v-list-item title="About" to="/app/about" />
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="py-6">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
