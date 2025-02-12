<template>
  <div class="container">
    <!-- Hero Section -->
    <section class="hero">
      <h1>Welcome to My Nuxt App</h1>
      <p>Build amazing web applications with Vue & Nuxt.</p>
      <button class="btn">Get Started</button>
    </section>
      <Feature />
      <Team />
      <Counter /> 
  </div>
</template>

<style scoped>
/* Container */
.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #007bff, #6610f2);
  color: white;
  padding: 60px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.btn {
  background: #f39c12;
  color: white;
  padding: 10px 20px;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.btn:hover {
  background: #e67e22;
}
</style>
