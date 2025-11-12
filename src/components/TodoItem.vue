<!-- src/components/TodoItem.vue -->
<template>
  <li>
    <input type="checkbox" v-model="task.completed" @change="$emit('toggle', task.id)" />
    <span :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">{{ task.text }}</span>
    <button @click="$emit('delete', task.id)">Delete</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    task: Object
  }
}
</script>
