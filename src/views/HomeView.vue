<template>
  <SideLayout class="h-screen">
    <button @click="() => arrayGreen.push({ id: 20, name: 'Added item' })">
      Add item in green
    </button>
    <div style="display: flex; flex-direction: row; gap: 20px">
      <div style="width: 100%; padding: 10px; border: 1px solid white">
        <KanbanColumn v-model="arrayGreen" />
      </div>
      <div style="width: 100%; padding: 10px; border: 1px solid white">
        <KanbanColumn v-model="array2" />
      </div>
      <div style="width: 100%; padding: 10px; border: 1px solid white">
        <KanbanColumn v-model="array3" />
      </div>
      <div style="width: 100%; padding: 10px; border: 1px solid white">
        <KanbanColumn v-model="array4" />
      </div>
    </div>
  </SideLayout>
</template>

<script setup lang="ts">
import KanbanColumn from '@/components/KanbanColumn.vue'
import SideLayout from '@/components/SideLayout.vue'
import { ref } from 'vue'

const arrayGreen = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' },
  { id: 7, name: 'Item 7' },
  { id: 8, name: 'Item 8' },
  { id: 9, name: 'Item 9' },
  { id: 10, name: 'Item 10' }
])

const array2 = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' },
  { id: 7, name: 'Item 7' },
  { id: 8, name: 'Item 8' },
  { id: 9, name: 'Item 9' },
  { id: 10, name: 'Item 10' }
])

const array3 = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' },
  { id: 7, name: 'Item 7' },
  { id: 8, name: 'Item 8' },
  { id: 9, name: 'Item 9' },
  { id: 10, name: 'Item 10' }
])

const array4 = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' },
  { id: 7, name: 'Item 7' },
  { id: 8, name: 'Item 8' },
  { id: 9, name: 'Item 9' },
  { id: 10, name: 'Item 10' }
])
</script>
