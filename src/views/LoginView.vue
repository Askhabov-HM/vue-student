<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const login = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)
const error = ref<string | null>(null)

async function onSubmit() {
  error.value = null
  loading.value = true

  try {
    // Мок-логин: любые непустые логин/пароль
    if (!login.value.trim() || !password.value.trim()) {
      error.value = 'Введите логин и пароль'
      return
    }

    // тут позже будет запрос на backend (node.js)
    localStorage.setItem('authed', 'true')

    const redirect = typeof route.query.redirect === 'string' ? route.query.redirect : '/app/dashboard'
    router.push(redirect)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <v-container class="py-10">
    <v-row justify="center">
      <v-col cols="12" sm="10" md="6" lg="4">
        <v-card rounded="lg" elevation="2">
          <v-card-title class="text-h5">Вход в кабинет</v-card-title>

          <v-card-text>
            <v-alert v-if="error" type="error" variant="tonal" class="mb-4">
              {{ error }}
            </v-alert>

            <v-form @submit.prevent="onSubmit">
              <v-text-field
                v-model="login"
                label="Логин"
                autocomplete="username"
                prepend-inner-icon="mdi-account"
                class="mb-2"
              />

              <v-text-field
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                label="Пароль"
                autocomplete="current-password"
                prepend-inner-icon="mdi-lock"
                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="showPassword = !showPassword"
                class="mb-2"
              />

              <v-btn
                type="submit"
                color="primary"
                variant="flat"
                block
                :loading="loading"
              >
                Войти
              </v-btn>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-btn variant="text" to="/">На главную</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
