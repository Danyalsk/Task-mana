<template>
  <SideLayout class="h-screen bg-custom-dark">
    <div style="display: flex; flex-direction: row; gap: 20px" class="h-screen">
      <div style="width: 100%; padding: 10px">
        <div class="flex justify-between">
          <h1 class="font-semibold text-gray-400">Todo</h1>
          <button @click="todo = true">
            <svg
              class="h-6 w-6 text-gray-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </button>
        </div>

        <KanbanColumn v-model="name" />
      </div>
      <div style="width: 100%; padding: 10px">
        <div class="flex justify-between">
          <h1 class="font-semibold text-gray-400">In Progress</h1>
          <button @click="progress = true">
            <svg
              class="h-6 w-6 text-gray-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </button>
        </div>
        <KanbanColumn v-model="array2" />
      </div>
      <div style="width: 100%; padding: 10px">
        <div class="flex justify-between">
          <h1 class="font-semibold text-gray-400">In Review</h1>
          <button @click="review = true">
            <svg
              class="h-6 w-6 text-gray-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </button>
        </div>

        <KanbanColumn v-model="array3" />
      </div>
    </div>

    <KanbanColumn />
  </SideLayout>
</template>

<script setup lang="ts">
// import TodoDialog from '@/components/TodoDialog.vue'
import KanbanColumn from '@/components/KanbanColumn.vue'
import SideLayout from '@/components/SideLayout.vue'
import { ref } from 'vue'
// import InReview from '@/components/InReview.vue'
// import InProgress from '@/components/InProgress.vue'
import { useKanbanStore } from '@/stores/kanbans'

const todo = ref(false)
const review = ref(false)
const progress = ref(false)

const todoArray = useKanbanStore()

const name = todoArray.todos
console.log(name)

const array2 = ref([
  { id: 1, name: '' },
  { id: 2, name: '' },
  { id: 3, name: '' },
  { id: 4, name: '' }
])

const array3 = ref([
  { id: 1, name: '' },
  { id: 2, name: '' },
  { id: 3, name: '' },
  { id: 4, name: '' },
  { id: 5, name: '' }
])

const array4 = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' }
])
</script>
