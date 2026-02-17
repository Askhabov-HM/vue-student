<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStudentStore } from '@/stores/student'

const router = useRouter()
const s = useStudentStore()

const fullName = ref(s.student.fullName)
const program = ref(s.student.program)
const course = ref(s.student.course)

const saved = ref(false)

function save() {
  saved.value = false
  s.updateProfile({
    fullName: fullName.value,
    program: program.value,
    course: Number(course.value),
  })
  saved.value = true
}

function logout() {
  localStorage.setItem('authed', 'false')
  router.push('/')
}
</script>

<template>
  <h1 class="text-h5">Profile</h1>

  <v-row class="mt-2">
    <v-col cols="12" md="7">
      <v-card rounded="lg" elevation="1">
        <v-card-title>Данные студента</v-card-title>
        <v-card-text>
          <v-alert v-if="saved" type="success" variant="tonal" class="mb-4">
            Сохранено
          </v-alert>

          <v-form @submit.prevent="save">
            <v-text-field v-model="fullName" label="ФИО" class="mb-2" />
            <v-text-field v-model="program" label="Направление" class="mb-2" />
            <v-text-field v-model.number="course" label="Курс" type="number" min="1" max="6" class="mb-2" />

            <v-btn type="submit" color="primary" variant="flat">Сохранить</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="5">
      <v-card rounded="lg" elevation="1">
        <v-card-title>Аккаунт</v-card-title>
        <v-card-text class="text-body-2 text-medium-emphasis">
          Здесь позже появятся смена пароля и настройки безопасности.
        </v-card-text>
        <v-card-actions>
          <v-btn color="error" variant="tonal" prepend-icon="mdi-logout" @click="logout">
            Выйти
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
