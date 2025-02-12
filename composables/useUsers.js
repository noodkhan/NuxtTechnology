// composables/useUsers.js
import { ref } from "vue";

export function useUsers() {
  const users = ref(
    [
     { id: 1, name: "John Doe", email: "john@example.com" },
     { id: 2, name: "Jane Doe", email: "jane@example.com" },
    ]
);

  const addUser = (user) => {
    user.id = Date.now();
    users.value.push(user);
  };

  const updateUser = (id, updatedUser) => {
    const index = users.value.findIndex((user) => user.id === id);
    if (index !== -1) {
      users.value[index] = updatedUser;
    }
  };

  const deleteUser = (id) => {
    users.value = users.value.filter((user) => user.id !== id);
  };

  return { users, addUser, updateUser, deleteUser };
}
