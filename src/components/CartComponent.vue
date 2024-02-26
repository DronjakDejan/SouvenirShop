<template>
  <div class="text-center">
    <v-menu transition="scale-transition" :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-btn color="secondary" v-bind="props">
          <v-icon icon="mdi-cart-outline"></v-icon> ({{ store.totalItems }})</v-btn
        >
      </template>

      <v-list class="bg-secondary">
        <v-list-item v-for="product in store.cart" :key="product.id"
          ><CartItemComponent :product-data="product" />
        </v-list-item>
        <div v-if="store.totalItems">Total Price: {{ store.totalPrice }}</div>
        <v-btn @click="router.push({name : 'checkout'})" v-if="store.totalItems" color="success">checkout</v-btn>
      </v-list>
    </v-menu>
  </div>
  
</template>

<script setup>
import CartItemComponent from "@/components/CartItemComponent.vue";
import { useProductsStore } from "@/store/ProductsStore";


import { useRouter } from "vue-router";
const store = useProductsStore();
const router = useRouter()

</script>

<style scoped></style>
