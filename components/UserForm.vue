<template>
<section>

  <div class="form-container">
<!-- 
    <h3>{{ editMode ? "Edit User" : "Add User" }}</h3>
    <form @submit.prevent="submitForm">
      <input v-model="user.name" type="text" placeholder="Name" required />
      <input v-model="user.email" type="email" placeholder="Email" required />
      <button type="submit">{{ editMode ? "Update" : "Add" }}</button> 

    </form>
-->
  <button type="submit">something</button> 
  </div>

</section>
</template>

<script setup>
  import {useUsers} from '@composables/useUsers'
  const { users, addUser, updateUser, deleteUser } = useUsers()

</script>
