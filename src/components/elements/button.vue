<script setup lang="ts">
const props = defineProps(['clickme']);
const emits = defineEmits(['play']);
function display() {
  emits('play');
}
</script>

<template lang="pug">
button(type="button"  :class="{prop: props.clickme}" @click="display")
    <slot></slot>
</template>
<style scoped>
button {
  display: inline-block;
  background-image: linear-gradient(-145deg, #487ad8, #dd52d6);
  color: white;
  padding: 5px 15px;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1rem;
  border-radius: 6px;
  border: none;
  height: 45px;
  font-size: 1.3rem;
  cursor: pointer;
  width: 100%;
}

button:hover {
  color: #000;
  background-image: linear-gradient(145deg, #487ad8, #dd52d6);
  transition: all 0.5s ease-out;
}
</style>
