import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useKanbanStore = defineStore('todo', () => {
  const todos = ref([
    {
      name: 'Go Gym'
    }
  ])

  return { todos }
})
