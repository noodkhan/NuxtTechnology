<template>
    <div class="login-container">
      <div class="login-card">
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="input-group">
            <input v-model="email" type="email" placeholder="Email" required />
          </div>
          <div class="input-group">
            <input v-model="password" type="password" placeholder="Password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <NuxtLink to="/register">Register</NuxtLink></p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  // import { useAuthStore } from '@/stores/auth'
  
  const email = ref('')
  const password = ref('')
  // const auth = useAuthStore()
  
  const handleLogin = async () => {
    console.log('Logging in:', email.value, password.value)
    // await auth.login({ email: email.value, password: password.value })
  }
  </script>
  
  <style scoped>
  /* General Styling */
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #667eea, #764ba2);
  }
  
  /* Login Card */
  .login-card {
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
  