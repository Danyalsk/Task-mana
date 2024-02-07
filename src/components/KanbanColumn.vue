<template>
  <draggable
    v-model="myArray"
    v-bind="dragOptions"
    style="height: 100%"
    group="kanban"
    @start="drag = true"
    @end="drag = false"
    item-key="id"
  >
    <template #item="{ element }">
      <div style="height: 80px; border: 1px solid white; margin-top: 10px; margin-bottom: 10px">
        {{ element.name }}
      </div>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import { computed, ref } from 'vue'
const drag = ref(false)

const myArray = defineModel<any>()

const dragOptions = computed(() => {
  return {
    animation: 200,
    group: 'description',
    disabled: false,
    ghostClass: 'ghost'
  }
})
</script>

<style>
.button {
  margin-top: 35px;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}
</style>
