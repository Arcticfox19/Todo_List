<template>
  <div>
    <Hello />
    <p>{{ sum }}</p>
    <p>{{ greeting }}</p>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import { add, greet } from './utils.js'

let sum = add(2, 3)
let greeting = greet("Alice")

export default {
  name: 'App',
  components: { Hello },
  data() {
    return {
      sum: add(2, 3),
      greeting: greet("Alice")
    }
  }
}
</script>
