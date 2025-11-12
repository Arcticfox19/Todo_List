<!-- src/components/TodoList.vue -->
<template>
  <div>
    <input v-model="newTask" placeholder="Add a task" @keyup.enter="addTask" />
    <ul>
      <TodoItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toggle="toggleTask"
        @delete="deleteTask"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: "TodoList",
  components: { TodoItem },
  data() {
    return {
      newTask: "",
      tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
      nextId: 1
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim() === "") return
      this.tasks.push({ id: this.nextId++, text: this.newTask, completed: false })
      this.newTask = ""
      this.saveTasks()
    },
    toggleTask(id) {
      const task = this.tasks.find(t => t.id === id)
      if (task) task.completed = !task.completed
      this.saveTasks()
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id)
      this.saveTasks()
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  }
}
</script>
