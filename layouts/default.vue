<template>
    <div class="layout">

      <!-- Header -->
       <Header/>
      <!-- Main Content -->
      <main class="content">
        <slot /> <!-- Dynamic content will be injected here -->
      </main> 
      <Footer/>

    </div>
  </template>
  
  <style scoped>
  /* Layout Styling */
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  /* Header */
  .header {
    background: #222;
    color: white;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .header nav a {
    color: white;
    margin-left: 15px;
    text-decoration: none;
    font-weight: bold;
  }
  
  .header nav a:hover {
    color: #f39c12;
  }
  
  /* Main Content */
  .content {
    flex: 1;
    padding: 20px;
  }
  
  /* Footer */
  .footer {
    background: #222;
    color: white;
    text-align: center;
    padding: 10px;
  }
  </style>
  