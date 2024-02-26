<template>
  <div class="checkout">
    <v-container>
      <v-row>
        <v-col>
          <v-list-item v-for="item in store.cart" :key="item.id">
            <CartItemComponent :product-data="item" /></v-list-item>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useProductsStore } from "@/store/ProductsStore";
import CartItemComponent from "./CartItemComponent.vue";
const store = useProductsStore();
</script>

<style scoped></style>
