import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const addedEl = ref([]);
  
  function increment(id) {
    count.value++
    addedEl.value.push(id)
  }

  return { count, increment }
})
