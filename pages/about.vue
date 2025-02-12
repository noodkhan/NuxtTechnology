<template>
    <div class="container">
      <!-- About Section -->
      <section class="about">
        <h1>About Us</h1>
        <p>We are passionate about building high-performance web applications with Nuxt.js.</p>
      </section>

      <section>
        <Team/>
      </section>
      

      <section>
        <Feature/>
      </section>
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
  
  /* About Section */
  .about {
    background: linear-gradient(135deg, #28a745, #20c997);
    color: white;
    padding: 60px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .about h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  
  .about p {
    font-size: 1.2rem;
  }
 
  </style>
  