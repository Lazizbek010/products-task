import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const addedEl = ref([]);
  
  function increment(id) {
    addedEl.value.push(id)
  }

  return { addedEl, increment }
})
