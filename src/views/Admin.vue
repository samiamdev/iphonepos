<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';


</script>
<template>
    <main class="admin-page">
        <div class="div">
            <RouterLink :to="{ name: 'StockPage' }">Stock</RouterLink>
        </div>

        <div class="div">
            <RouterLink :to="{ name: 'ReOrderPage' }">Re Order</RouterLink>
        </div>

        <div class="div">
            <RouterLink :to="{ name: 'RecieveOrderPage' }"> Recieve Order</RouterLink>
        </div>

        <div div class=" div">
            <RouterLink :to="{ name: 'CustomerPage' }"> Customer</RouterLink>
        </div>
        <div class="div">
            <RouterLink :to="{ name: 'Reports' }"> Report</RouterLink>
        </div>
    </main>
    <RouterView></RouterView>
</template>

<style>
main {
    display: flex;
    justify-content: center;

}

main>div {
    margin: 1rem;

}
</style>

