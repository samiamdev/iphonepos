<script setup lang="ts">
import { ref } from "vue";
import TagCloud from "./TagCloud.vue";
import ButtonVue from "./elements/ButtonVue.vue";
defineProps({
  boxTitle: String,
});
</script>

<template>
  <div class="wrapper-container">
    <div class="box-content__container">box-content</div>
    <div class="form-conent__container">
      <div class="group-inputbox card">
        <div class="card-header">
          <h5>{{ boxTitle }}</h5>
        </div>
        <div class="card-body">
          <slot name="inputbox" />
          <button-vue>บันทึก</button-vue>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 0 1rem;
}

.card-header span {
  font-size: 1rem;
  font-weight: bold;
}
</style>
