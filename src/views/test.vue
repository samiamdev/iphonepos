<script setup lang="ts">
import { useForm, useField, ErrorMessage } from 'vee-validate';
import { toRef, reactive, ref, onMounted, onUnmounted } from 'vue';
import * as Yup from 'yup';
import Button from '@/components/elements/button.vue';

const fullname = ref('');
// const state = reactive({
//     fullname: ""
// })

const { value, errorMessage } = useField(fullname);
const isFav = ref(!false);

const schema = Yup.object({
  fullname: Yup.string().required('fullname is required')
});

function alertAction() {
  alert('hi');
}

useForm({ validationSchema: schema });
</script>

<template lang="pug">
Button( :class="{ dynamic: isFav }" @play="alertAction") save
</template>

<style>
input,
span {
  display: block;
  font-size: 16px;
}
</style>
