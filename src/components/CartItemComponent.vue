<template>
  
  <div class="cart-item" v-if="store.cart.length">
    <v-col cols="12" >
      <v-card color="bg-tertiary">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="text-h5">
              {{ props.productData.title }}
            </v-card-title>

            <v-card-subtitle
              >Price:{{ props.productData.price }}</v-card-subtitle
            >
            <v-card-subtitle
              >Amount:{{ props.productData.quantity }}</v-card-subtitle
            >

            <v-card-actions>
              <v-btn
                @click="increment"
                class="ms-2"
                variant="outlined"
                size="small"
              >
                +
              </v-btn>

              <v-btn color="success" @click="removeItem">X</v-btn>
              <v-btn
                @click="decrement"
                class="ms-2"
                variant="outlined"
                size="small"
              >
                -
              </v-btn>
            </v-card-actions>
          </div>

          <v-avatar class="ma-3" size="125" rounded="0">
            <v-img :src="props.productData.thumbnail"></v-img>
          </v-avatar>
        </div>
      </v-card>
    </v-col>
  </div>
  <div v-if="!store.countCartItems">empty</div>
</template>

<script setup>
import { defineProps } from "vue";

import { useProductsStore } from "@/store/ProductsStore";

const store = useProductsStore();
const props = defineProps({
  productData: {
    type: Object,
    required: true,
  },
});

const removeItem = () => {
  store.removeItem(props.productData);
};
const increment = () => {
  store.incrementQ(props.productData);
};
const decrement = () => {
  store.decrementQ(props.productData);
};
</script>

<style scoped></style>
