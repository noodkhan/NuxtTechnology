<template>
    <div class="container">
      <!-- Services Header -->
      <section class="services-header">
        <h1>Our Services</h1>
        <p>We provide high-quality solutions tailored to your needs.</p>
      </section>
  
      <!-- Services Grid -->
      <section class="services">
        <div class="service">
          <h2>🌍 Web Development</h2>
          <p>We build scalable and high-performance web applications.</p>
        </div>
        <div class="service">
          <h2>📱 Mobile App Development</h2>
          <p>Creating stunning and responsive mobile applications.</p>
        </div>
        <div class="service">
          <h2>🎨 UI/UX Design</h2>
          <p>Designing seamless and engaging user experiences.</p>
        </div>
        <div class="service">
          <h2>⚙️ Backend Solutions</h2>
          <p>Robust backend architectures with modern technologies.</p>
        </div>
        <div class="service">
          <h2>🚀 SEO Optimization</h2>
          <p>Boost your website's ranking and visibility.</p>
        </div>
        <div class="service">
          <h2>☁️ Cloud Deployment</h2>
          <p>Deploying applications on secure and scalable cloud platforms.</p>
        </div>
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
  
  /* Services Header */
  .services-header {
    background: linear-gradient(135deg, #ff5733, #c70039);
    color: white;
    padding: 60px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .services-header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  
  .services-header p {
    font-size: 1.2rem;
  }
  
  /* Services Grid */
  .services {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 40px;
  }
  
  .service {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }
  
  .service:hover {
    transform: translateY(-5px);
  }
  
  .service h2 {
    font-size: 1.5rem;
    color: #ff5733;
  }
  
  .service p {
    font-size: 1rem;
    color: #555;
  }
  </style>
  