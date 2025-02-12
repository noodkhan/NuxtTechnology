<template>
    <footer class="footer">
      <div class="container">
        <!-- Brand Section -->
        <div class="footer-brand">
          <h2>MyBrand</h2>
          <p>Building the future, one step at a time.</p>
        </div>
  
        <!-- Navigation Links -->
        <div class="footer-nav">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/services">Services</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </div>
  
        <!-- Social Media -->
        <div class="footer-social">
          <a href="#" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="Facebook" />
          </a>
          <a href="#" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="Twitter" />
          </a>
          <a href="#" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="Instagram" />
          </a>
        </div>
      </div>
  
      <!-- Copyright -->
      <div class="footer-bottom">
        <p>&copy; 2025 MyBrand. All Rights Reserved.</p>
      </div>
    </footer>
  </template>
  
  <style scoped>
  /* Footer Container */
  .footer {
    background: #222;
    color: white;
    padding: 40px 20px;
    text-align: center;
    position: relative;
    bottom: 0;
    width: 100%;
  }
  
  /* Flex Container */
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1100px;
    margin: auto;
  }
  
  /* Brand Section */
  .footer-brand h2 {
    font-size: 1.8em;
    margin-bottom: 10px;
  }
  
  .footer-brand p {
    font-size: 0.9em;
    opacity: 0.8;
  }
  
  /* Navigation Links */
  .footer-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
  
  .footer-nav a {
    color: white;
    text-decoration: none;
    font-size: 1em;
    transition: 0.3s;
  }
  
  .footer-nav a:hover {
    color: #f39c12;
  }
  
  /* Social Media Icons */
  .footer-social {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  
  .footer-social img {
    width: 30px;
    height: 30px;
    transition: transform 0.3s;
  }
  
  .footer-social img:hover {
    transform: scale(1.2);
  }
  
  /* Copyright Section */
  .footer-bottom {
    margin-top: 20px;
    border-top: 1px solid #444;
    padding-top: 10px;
    font-size: 0.8em;
    opacity: 0.7;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
      gap: 20px;
    }
  }
  </style>
  