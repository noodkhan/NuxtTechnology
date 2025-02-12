<template>
  <!-- Team Section -->
  <section class="team">
    <h2>Meet Our Team</h2>
    <div class="team-grid">
      <div class="team-member">
        <img src="" alt="John Doe" />
        <h3>John Doe</h3>
        <p>Founder & CEO</p>
      </div>
      <div class="team-member">
        <img src="" alt="Jane Smith" />
        <h3>Jane Smith</h3>
        <p>Lead Developer</p>
      </div>
      <div class="team-member">
        <img src="" alt="Mike Johnson" />
        <h3>Mike Johnson</h3>
        <p>UI/UX Designer</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Team Section */
.team {
  margin-top: 40px;
}

.team h2 {
  font-size: 2rem;
  color: #28a745;
  margin-bottom: 20px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.team-member {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.team-member:hover {
  transform: translateY(-5px);
}

.team-member img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.team-member h3 {
  font-size: 1.3rem;
  color: #333;
}

.team-member p {
  font-size: 1rem;
  color: #666;
}
</style>
