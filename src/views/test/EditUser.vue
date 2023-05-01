<script setup lang="ts">
import axios from "axios";
import { reactive, ref } from "vue";
import User from "./types/user.type";
const user = ref<User[]>([
  {
    name: "pirat",
    surname: "piyamat",
    age: 26,
    email: "pirat@homail.com",
    phone: "0833434342",
  },
]);

const onSave = function () {
  axios.post("users", ...user.value).then((data) => console.log(data));
};
</script>

<template>
  <div class="main-container">
    <div>Edit Users</div>
    <form @submit.prevent="onSave">
      <label for="name">name</label>
      <input type="text" v-model="user[0].name" />

      <label for="surname">surname</label>
      <input type="text" v-model="user[0].surname" />

      <label for="age">age</label>
      <input type="text" v-model="user[0].age" />

      <label for="email">email</label>
      <input type="text" v-model="user[0].email" />

      <label for="phone">phone</label>
      <input type="text" v-model="user[0].phone" />
      <input type="hidden" />
      <div>
        <button>save</button>
        <button>update</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.main-container {
  margin: 40px;
}

input {
  display: block;
}
</style>
