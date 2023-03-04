<script setup lang="ts">
import { ref } from 'vue';
import Button from './elements/button.vue';
const title = 'First Vue App 👍';
const props = defineProps(['isLogin']);
</script>
<template lang="pug">
slot(name="loginModal")
  div( class="back-drop")
      div.modal
        form.form-inner__modal
          input(type="text" placeholder="ป้อนชื่อผู้ใช้งาน หรือ อีเมลล์")
          input(type="password" placeholder="ป้อนรหัสผ่าน" )
        Button เข้าสู่ระบบ

        
    
</template>
<style scoped>
.modal {
  background: #fff;
  min-height: 20rem;
  width: 400px;
  border-radius: 8px;
  margin: 20rem auto;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 8px 20px rgba(0, 0, 0, 0.1);
}
.back-drop {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  top: 0;
}
form.form-inner__modal {
  margin: auto;
  text-align: center;
}
input {
  font-size: 17px;
  padding: 14px 16px;
  margin-bottom: 1rem;
  height: 45px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 6px;
}

button {
  width: 100%;
  background-image: linear-gradient(-145deg, #487ad8, #dd52d6);
}

.dynamic {
  display: none;
}
</style>
