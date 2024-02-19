<template>
  <div>
    <v-sheet
      class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
      elevation="4"
      border
      rounded
      max-width="800"
      width="100%"
    >
      <v-card>
        
        <v-card-title>
          {{ selectedProduct.title }}
        </v-card-title>
        <v-card-subtitle>
          {{ selectedProduct.brand }}
        </v-card-subtitle>
        <v-img :src="selectedProduct.thumbnail ">
           
        </v-img>

        <v-card-text>
          {{ selectedProduct.price }}
        </v-card-text>
        <v-card-action>
          <v-btn color="success" @click="addToCart">Add to cart</v-btn>
          <v-btn class="ml-4" color="primary" to="/shop">Back</v-btn>
        </v-card-action>
       
      </v-card>
      
    </v-sheet>
    
  </div>
</template>

<script setup>
import { useProductsStore } from "@/store/ProductsStore";

import { computed } from "vue";
import { useRoute } from "vue-router";

const store = useProductsStore();
const route = useRoute();
//const addToCart = () => {
  //console.log("test")
//}
const selectedProduct = computed(() => {
  return store.products.find((item) => item.id === Number(route.params.id));
});
const addToCart = () => {
 store.addToCart(selectedProduct.value)

}

</script>

<style scoped></style>
