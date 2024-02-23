<template>
  <div>
    <v-container grid-list-xs>
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <div class="ma-1">
            <v-img :height="500" :src="selectedProduct.thumbnail"> </v-img>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <v-col class="text-h4">
            {{ selectedProduct.title }}
          </v-col>
          <v-col class="text-h6">
            {{ selectedProduct.brand }}
          </v-col>

          <v-col class="text-h6">
            {{ selectedProduct.price.toFixed(2) }} $
          </v-col>
          <v-col>
            <v-chip-group v-model="selectedColors">
              <v-chip
                v-for="(color, index) in availableColors"
                :key="index"
                :color="color"
                :style="{ backgroundColor: color }"
                @click="handleColor(color)"
              >
                {{ color }}
              </v-chip>
            </v-chip-group>
          </v-col>
          <v-btn
            @click="increment"
            class="ms-2"
            variant="outlined"
            size="small"
          >
            +
          </v-btn>

          <v-btn
            @click="decrement"
            class="ms-2"
            variant="outlined"
            size="small"
          >
            -
          </v-btn>
          <v-col>
            <v-btn color="success" @click="addToCart">Add to cart</v-btn>
            <v-btn class="ml-4" color="primary" to="/shop">Back</v-btn>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useProductsStore } from "@/store/ProductsStore";


import { useRoute } from "vue-router";

const store = useProductsStore();
const route = useRoute();
//const addToCart = () => {
//console.log("test")
//}
const availableColors = ["red", "blue", "green", "yellow"];
const handleColor = (color) => {
  store.selectColor(color)
}
  
  

const selectedProduct = computed(() => {
  return store.products.find((item) => item.id === Number(route.params.id));
});

const addToCart = () => {
  store.addToCart(selectedProduct.value);
};
</script>

<style scoped></style>
