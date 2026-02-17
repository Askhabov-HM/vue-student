<script setup lang="ts">
import { computed } from 'vue'
import { useStudentStore } from '@/stores/student'

const s = useStudentStore()

const student = computed(() => s.student)
const subjectsPreview = computed(() => s.student.subjects.slice(0, 6))
</script>

<template>
  <div class="d-flex align-center justify-space-between">
    <h1 class="text-h5">Dashboard</h1>
    <v-chip color="primary" variant="tonal" prepend-icon="mdi-school">
      Курс {{ student.course }}
    </v-chip>
  </div>

  <v-row class="mt-2">
    <!-- Student summary -->
    <v-col cols="12" md="7">
      <v-card rounded="lg" elevation="1">
        <v-card-title class="d-flex align-center ga-2">
          <v-icon icon="mdi-account-school-outline" />
          Сводка студента
        </v-card-title>
        <v-card-text>
          <v-list density="compact">
            <v-list-item title="ФИО" :subtitle="student.fullName" />
            <v-list-item title="Направление" :subtitle="student.program" />
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Avg grade -->
    <v-col cols="12" md="5">
      <v-card rounded="lg" elevation="1">
        <v-card-title class="d-flex align-center ga-2">
          <v-icon icon="mdi-chart-line" />
          Средний балл
        </v-card-title>
        <v-card-text>
          <div class="text-h4">{{ student.avgGrade.toFixed(1) }} / 5.0</div>
          <div class="text-body-2 text-medium-emphasis mb-3">Текущий семестр</div>
          <v-progress-linear :model-value="s.avgPercent" height="10" rounded />
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Subjects -->
    <v-col cols="12">
      <v-card rounded="lg" elevation="1">
        <v-card-title class="d-flex align-center ga-2">
          <v-icon icon="mdi-book-open-page-variant-outline" />
          Предметы (кратко)
        </v-card-title>

        <v-card-text>
          <v-list lines="two">
            <v-list-item
              v-for="subj in subjectsPreview"
              :key="subj.id"
              :title="subj.name"
              :subtitle="subj.teacher ? `Преподаватель: ${subj.teacher}` : undefined"
            >
              <template #append>
                <div class="d-flex ga-2">
                  <v-chip size="small" variant="tonal">
                    {{ subj.kind }}
                  </v-chip>
                  <v-chip
                    size="small"
                    variant="tonal"
                    :color="subj.status === 'Завершён' ? 'success' : 'info'"
                  >
                    {{ subj.status }}
                  </v-chip>
                </div>
              </template>
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-card-actions>
          <v-btn variant="text" to="/app/profile">Профиль</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
