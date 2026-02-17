import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const double = computed(() => count.value * 2)

  const inc = () => (count.value += 1)
  const dec = () => (count.value -= 1)
  const reset = () => (count.value = 0)

  return { count, double, inc, dec, reset }
})
