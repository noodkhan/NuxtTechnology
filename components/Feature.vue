<template>

      <!-- Features Section -->
      <section class="features">

        <div class="feature">
          <h2>🚀 Fast Performance</h2>
          <p>Nuxt optimizes your site for speed and efficiency.</p>
        </div>

        <div class="feature">
          <h2>🛠️ Easy to Use</h2>
          <p>Nuxt provides a smooth developer experience.</p>
        </div>

        <div class="feature">
          <h2>🌍 SEO Optimized</h2>
          <p>Built-in SEO features help your site rank better.</p>
        </div>

      </section>



</template>

<style scoped>
/* Features Section */
  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 40px;
  }
  
  .feature {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }
  
  .feature:hover {
    transform: translateY(-5px);
  }
  
  .feature h2 {
    color: #007bff;
    font-size: 1.5rem;
  }
  
  .feature p {
    font-size: 1rem;
    color: #555;
  }
</style>