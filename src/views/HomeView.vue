<script setup lang="ts">
const isAuthed = localStorage.getItem('authed') === 'true'
</script>

<template>
  <v-main>
    <v-app-bar flat>
      <v-toolbar-title>Чеченский государственный университет (ЧГУ) • Кабинет студента</v-toolbar-title>
      <v-spacer />
      <v-btn
        v-if="isAuthed"
        color="primary"
        variant="flat"
        to="/app/dashboard"
      >
        В кабинет
      </v-btn>
      <v-btn
        v-else
        color="primary"
        variant="flat"
        to="/login"
      >
        Войти
      </v-btn>
    </v-app-bar>

    <v-container fluid class="py-10 px-6">

      <!-- Hero -->
      <v-card rounded="lg" elevation="2">
        <v-card-title class="text-h4">Добро пожаловать!</v-card-title>
        <v-card-text class="text-body-1">
          Это учебный проект “Кабинет студента” для ЧГУ.
          Внутри — ваш курс, направление, список предметов и средний балл.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" variant="flat" :to="isAuthed ? '/app/dashboard' : '/login'">
            {{ isAuthed ? 'Открыть кабинет' : 'Войти в кабинет' }}
          </v-btn>
          <v-btn variant="text" href="#features">Что внутри</v-btn>
        </v-card-actions>
      </v-card>

      <!-- About + Links -->
      <v-row class="mt-8">
        <v-col cols="12" md="7">
          <v-card rounded="lg" elevation="1">
            <v-card-title class="d-flex align-center ga-2">
              <v-icon icon="mdi-school-outline" />
              О ЧГУ
            </v-card-title>
            <v-card-text>
              <p class="mb-3">
                Чеченский государственный университет (ЧГУ) — один из ведущих вузов региона.
                На этой странице можно разместить краткое описание университета, факультеты и направления,
                а также важные ссылки для студентов и абитуриентов.
              </p>
              <p class="mb-0">
                В кабинете студента — быстрый доступ к учебной информации: предметы, успеваемость и профиль.
              </p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="5">
          <v-card rounded="lg" elevation="1">
            <v-card-title class="d-flex align-center ga-2">
              <v-icon icon="mdi-link-variant" />
              Полезные ссылки
            </v-card-title>
            <v-card-text>
              <v-list density="compact">
                <v-list-item title="Официальный сайт ЧГУ" subtitle="Новости и общая информация" />
                <v-list-item title="Абитуриенту" subtitle="Поступление и документы" />
                <v-list-item title="Расписание" subtitle="Занятия и экзамены" />
                <v-list-item title="Контакты" subtitle="Адрес, телефоны, почта" />
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Features -->
      <div id="features" class="mt-6">
        <h2 class="text-h5 mb-4">Что внутри кабинета</h2>

        <v-row>
          <v-col cols="12" md="4">
            <v-card rounded="lg" elevation="1">
              <v-card-title class="d-flex align-center ga-2">
                <v-icon icon="mdi-account-school-outline" />
                Профиль
              </v-card-title>
              <v-card-text>
                ФИО, курс, направление и основные данные студента.
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card rounded="lg" elevation="1">
              <v-card-title class="d-flex align-center ga-2">
                <v-icon icon="mdi-book-open-page-variant-outline" />
                Предметы
              </v-card-title>
              <v-card-text>
                Список дисциплин текущего семестра и их статусы.
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card rounded="lg" elevation="1">
              <v-card-title class="d-flex align-center ga-2">
                <v-icon icon="mdi-chart-line" />
                Средний балл
              </v-card-title>
              <v-card-text>
                Средний балл и визуализация прогресса обучения.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <v-divider class="my-10" />

      <v-footer color="transparent" class="px-0">
        <div class="text-body-2 text-medium-emphasis">
          Учебный проект для ЧГУ • Vue 3 • Vuetify
        </div>
      </v-footer>
    </v-container>
  </v-main>
</template>
