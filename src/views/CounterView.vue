<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
</script>

<template>
  <h1>Counter</h1>

  <v-card class="mt-4" max-width="420">
    <v-card-text>
      <div class="text-h5">Count: {{ counter.count }}</div>
      <div class="text-subtitle-1">Double: {{ counter.double }}</div>

      <div class="d-flex ga-2 mt-4">
        <v-btn color="primary" @click="counter.inc">+1</v-btn>
        <v-btn color="secondary" @click="counter.dec">-1</v-btn>
        <v-btn variant="outlined" @click="counter.reset">Reset</v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>
