<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <main class="admin-page">
    <div class="div">
      <RouterLink :to="{ name: 'StockPage' }">สต็อก</RouterLink>
    </div>

    <div class="div">
      <RouterLink :to="{ name: 'ReOrderPage' }">สั่งซื้อ</RouterLink>
    </div>

    <div class="div">
      <RouterLink :to="{ name: 'RecieveOrderPage' }">รับเข้า</RouterLink>
    </div>

    <div div class="div">
      <RouterLink :to="{ name: 'CustomerPage' }">ลูกค้า</RouterLink>
    </div>
    <div div class="div">
      <RouterLink :to="{ name: 'RegisterPage' }">ลงทะเบียน</RouterLink>
    </div>
    <div class="div">
      <RouterLink :to="{ name: 'ReportPage' }">รายงาน</RouterLink>
    </div>
    <div class="div">
      <RouterLink :to="{ name: 'SupplierPage' }">ผูัจัดจำหน่าย</RouterLink>
    </div>
    <div class="div">
      <RouterLink :to="{ name: 'EmployeePage' }">พนักงาน</RouterLink>
    </div>

    <div class="div">
      <RouterLink :to="{ name: 'CustomerCreditPage' }">ลูกหนี้</RouterLink>
    </div>
  </main>
  <RouterView></RouterView>
</template>

<style>
main {
  display: flex;
  justify-content: center;
}

main > div {
  margin: 1rem;
}
</style>
