<template>
    <div class="container">
      <!-- Contact Header -->
      <section class="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Fill out the form below and we’ll get back to you soon.</p>
      </section>
  
      <!-- Contact Form -->
      <section class="contact-form">
        <form @submit.prevent="submitForm">
          <div class="input-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name" placeholder="Your Name" required />
          </div>
  
          <div class="input-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" placeholder="Your Email" required />
          </div>
  
          <div class="input-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" placeholder="Your Message" rows="5" required></textarea>
          </div>
  
          <button type="submit">Send Message</button>
        </form>
      </section>


    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: "",
          email: "",
          message: "",
        },
      };
    },
    methods: {
      submitForm() {
        alert(`Thank you, ${this.form.name}! Your message has been sent.`);
        this.form.name = "";
        this.form.email = "";
        this.form.message = "";
      },
    },
  };
  </script>
  
  <style scoped>
  /* Container */
  .container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    text-align: center;
  }
  
  /* Contact Header */
  .contact-header {
    background: linear-gradient(135deg, #007bff, #0056b3);
    color: white;
    padding: 50px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .contact-header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  
  .contact-header p {
    font-size: 1.2rem;
  }
  
  /* Contact Form */
  .contact-form {
    margin-top: 40px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .input-group {
    margin-bottom: 20px;
    text-align: left;
  }
  
  .input-group label {
    font-size: 1rem;
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }
  
  .input-group input,
  .input-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  .input-group input:focus,
  .input-group textarea:focus {
    border-color: #007bff;
    outline: none;
  }
  
  button {
    background: #007bff;
    color: white;
    padding: 12px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
  
  button:hover {
    background: #0056b3;
  }
  </style>
  