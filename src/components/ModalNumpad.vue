<script setup lang="ts">
import { Ref, ref } from 'vue';

const button = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.']);
let display = ref('');

const sumTotal = ref<number | string>(0);

const getValue = (n: number) => {
  let val = (display.value += n + '');
};

const clearDisplay = () => {
  display.value = display.value.slice(0, -1);
};

const sliceNum = function () {
  display.value = '';
};

const sign = function () {
  sumTotal.value = display.value;
  console.log(sumTotal.value);
};
</script>

<template>
  <div class="backdrop">
    <div class="app-modal">
      <h1>modal</h1>

      <div class="trigger-btn">
        <div id="display-box">
          <i
            v-if="display"
            @click="sliceNum"
            id="clear"
            class="fa fa-times-circle"
          ></i>
          {{ display || 0 }}
        </div>
        <div class="group-buttons">
          <div class="button" @click="clearDisplay">&larr;</div>
          <div v-for="n in button" :key="n">
            <div class="button" @click="getValue(n as number)">
              {{ n }}
            </div>
          </div>
          <div class="button sign-btn" ref="btn" @click="sign">ตกลง</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.backdrop {
  top: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
}

.app-modal {
  width: 320px;
  background-color: white;
  margin: 100px auto;
  padding: 20px;
  border-radius: 4px;
}

#display-box {
  position: relative;
  padding: 15px 20px;
  background: rgba(0, 0, 0, 0.1);
  text-align: end;
  font-size: 25px;
}

#clear {
  padding-right: 40px;
  cursor: pointer;
  position: absolute;
  left: 1rem;
  top: 1.3rem;
  color: #5555;
  font-size: 20px;
}

.group-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.button {
  text-align: center;
  padding: 20px;
  border: 1px solid #3333;
  user-select: none;
  cursor: pointer;
  font-size: 25px;
  line-height: 15px;
}

.sign-btn {
  grid-column: 1 / 4;
}

.button:hover {
  background: rgba(0, 0, 0, 0.05);
}
</style>
