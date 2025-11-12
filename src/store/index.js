import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: JSON.parse(localStorage.getItem('todos') || '[]'),
  }),
  actions: {
    addTodo(text) {
      this.todos.push({ id: Date.now(), text, completed: false });
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    toggleTodo(id) {
      const todo = this.todos.find((t) => t.id === id);
      if (todo) todo.completed = !todo.completed;
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
  },
});
