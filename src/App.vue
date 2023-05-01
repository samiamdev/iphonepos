<template>
  <header>
    <NavBar :pathName="routes" />
  </header>
  <div></div>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavBar from './components/NavBar.vue';
import { RouterView, RouterLink } from 'vue-router';
import Modal from './components/ModalNumpad.vue';
export default defineComponent({
  components: { NavBar, Modal },
  setup() {
    const routes = ref([
      { pathName: 'home', title: 'หน้าขาย' },
      { pathName: 'AdminPage', title: 'หลังบ้าน' }
    ]);
    return { routes };
  },
  methods: {}
});
</script>

<style>
#app {
  font-family: Baijam;
}
</style>
