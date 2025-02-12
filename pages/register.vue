<template>
    <div class="register-container">
      <div class="register-card">
        <h2>Register</h2>
        <form @submit.prevent="handleRegister">
          <div class="input-group">
            <input v-model="name" type="text" placeholder="Full Name" required />
          </div>
          <div class="input-group">
            <input v-model="email" type="email" placeholder="Email" required />
          </div>
          <div class="input-group">
            <input v-model="password" type="password" placeholder="Password" required />
          </div>
          <div class="input-group">
            <input v-model="confirmPassword" type="password" placeholder="Confirm Password" required />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <NuxtLink to="/login">Login</NuxtLink></p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  // import { useAuthStore } from '@/stores/auth'
  
  const name = ref('')
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  // const auth = useAuthStore()
  
  const handleRegister = async () => {
    if (password.value !== confirmPassword.value) {
      alert('Passwords do not match!')
      return
    }
  
    alert("Thank you for Register :) ")
    console.log('Registering:', name.value, email.value, password.value)
    // await auth.register({ name: name.value, email: email.value, password: password.value })
  }
  </script>
  
  <style scoped>
  /* General Styling */
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #667eea, #764ba2);
    padding: 20px;
  }
  
  /* Register Card */
  .register-card {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 350px;
  }
  
  /* Form Inputs */
  .input-group {
    margin-bottom: 15px;
  }
  
  input {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: all 0.3s;
  }
  
  input:focus {
    border-color: #667eea;
    outline: none;
  }
  
  /* Button */
  button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    color: white;
    background: #667eea;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  button:hover {
    background: #5642a6;
  }
  
  /* Links */
  p {
    margin-top: 10px;
  }
  
  a {
    color: #667eea;
    text-decoration: none;
    font-weight: bold;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  