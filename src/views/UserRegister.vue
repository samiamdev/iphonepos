<script lang="ts">
import { defineComponent, ref } from 'vue';
import IUser from '../types/createUser';
export default defineComponent({
  setup() {
    let data = ref<IUser[]>([
      { u_username: '' },
      { u_password: '' },
      { u_firstname: '' },
      { u_lastname: '' },
      { u_phone: '' },
      { u_email: '' }
    ]);
    const onSubmit = function () {
      console.log(data.value);
    };

    return { data, onSubmit };
  }
});
</script>

<template lang="pug">
.container-wrap
    .form-register
        form.form-user__data(@submit="onSubmit")
            .input-box 
                label ชื่อผู้ใช้งาน
                input(type="text" v-model="data[0].u_username" name="username")
            .input-box 
                label รหัสผ่าน
                input(type="text" v-model="data[1].u_password" name="password")
            .input-box 
                label ชื่อ 
                input(type="text" v-model="data[2].u_firstname" name="firstname")
            .input-box 
                label นามสกุล
                input(type="text" v-model="data[3].u_lastname" name="lastname")
            .input-box 
                label เบอร์โทร
                input(type="text" v-model="data[4].u_phone" name="phone")
            .input-box 
                label อีเมลล์ 
                input(type="text" v-model="data[5].u_email" name="email")

        .actions-data
            button.btn-save(@click="onSubmit") บันทึกข้อมูล
</template>

<style scoped>
:root {
  --mybg-gdnt-color1: #487ad8;
  --mybg-gdnt-color2: #dd52d6;
}

.container-wrap {
  font-family: Baijam;
  font-weight: normal;
  max-width: 700px;
  height: 700px;
  background-color: #fff;
  margin: 5rem auto;
  padding-top: 1rem;
  position: relative;
  border-radius: 8px;
}

.form-register {
  max-width: 500px;
  margin: auto;
}

.form-user__data {
  margin-top: 2rem;
}

label {
  font-size: 1rem;
  color: #555;
}

input:focus {
  border: none;
  outline: solid 0.17rem #1b76ff;
  border-radius: 1px;
}

.input-box input {
  display: inline-block;
  margin: 0.6rem 0 0.6rem 0;
  width: 100%;
  height: 45px;
  width: 100%;
  font-size: 1rem;
  padding: 0 8px;
}

.actions-data button {
  font-family: inherit;
  font-size: 1.3rem;
  background-image: linear-gradient(-145deg, #487ad8, #dd52d6);
  color: white;
  border: none;
  height: 45px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;
}

.actions-data button:hover {
  color: #000;
  background-image: linear-gradient(145deg, #487ad8, #dd52d6);
  transition: all 0.5s ease-out;
}
</style>
