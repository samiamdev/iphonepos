<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavBar from './components/NavBar.vue';
import { RouterView, RouterLink } from 'vue-router';

export default defineComponent({
  components: { NavBar },
  setup() {
    const routes = ref([
      { pathName: 'home', title: 'หน้าขาย' },
      { pathName: 'AdminPage', title: 'หลังบ้าน' }
    ])
    return { routes }
  },
})

</script>
<template>
  <header>
    <NavBar :pathName="routes" />
  </header>
  <RouterView />
</template>

<style>
#app {
  font-family: Baijam;
}
</style>
