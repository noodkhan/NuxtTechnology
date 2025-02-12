<template>
  <div class="counter-container">
    <h2>Counter: {{ count }}</h2>
    <div class="buttons">
      <button @click="decrement">-</button>
      <button @click="increment">+</button>
      <button @click="multiple">X</button>
      <button @click="devided">/</button>
    </div>
  </div>
</template>

<script setup>
import { useCounter } from "@composables/useCounter";
const { count, increment, decrement , multiple , devided } = useCounter();
</script>


<style scoped>
.counter-container {
  text-align: center;
  padding: 20px;
  border: 2px solid #007bff;
  border-radius: 10px;
  max-width: 250px;
  margin: auto;
  background: #f8f9fa;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.8rem;
  color: #007bff;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

button {
  background: #007bff;
  color: white;
  font-size: 1.5rem;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

button:hover {
  background: #0056b3;
}
</style>
