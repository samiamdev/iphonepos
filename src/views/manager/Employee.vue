<script setup lang="ts">
import { ref, reactive } from "vue";
import MainLayout from "@/components/MainLayout.vue";
import axios from "axios";
const label = reactive({
  name: "ชื่อพนักงาน",
  email: "อีเมลล์",
  phone: "เบอร์โทรศัพท์",
  address: "ที่อยู่",
});

axios.post("users").then();
</script>

<template>
  <div>
    <MainLayout box-title="จัดการข้อมูลพนักงาน">
      <template #inputbox>
        <label>{{ label.name }}</label>
        <input type="text" />
        <label>{{ label.email }}</label>
        <input type="text" />
        <label>{{ label.phone }}</label>
        <input type="text" />
        <label>{{ label.address }}</label>
        <input type="text" />
      </template>
    </MainLayout>
  </div>
</template>

<style>
.group-inputbox input {
  font-size: 1rem;
  height: 45px;
  width: 100%;
  padding: 8px 16px;
  display: inline-block;
  border-radius: 8px;
  border: 1px solid #ccc;
  color: #555;
}

.group-inputbox input:focus {
  outline: 1px solid #0086f3;
  border: none;
}

.group-inputbox label {
  display: block;
}
</style>
