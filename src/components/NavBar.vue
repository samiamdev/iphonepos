<script setup lang="ts">
import { ref } from "vue";
const prop = defineProps(["pathName"]);

const routes = prop.pathName;
</script>
<template>
  <nav>
    <ul class="main-header__item-list">
      <li v-for="route in routes">
        <RouterLink :to="{ name: route.pathName }">
          {{ route.title }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav .main-header__item-list {
  font-family: Baijam;
  margin: 0;
  padding: 0;
  height: 4rem;
  background-image: linear-gradient(-145deg, #4679d8, #dd52d6);
  color: white;
  width: 100%;
  /* text-align: center; */
  align-items: center;
}

ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
}

li a {
  text-decoration: none;
  padding: 0.5rem;
  color: #ffff;
  font-size: 1.2rem;
  font-weight: 600;
}

.router-link-active {
  color: #000;
}
</style>
