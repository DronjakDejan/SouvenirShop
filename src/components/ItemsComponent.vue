<template>
  <div>
    <v-card class="bg-primary" @click="openItemPage(props.productData.id)">
      <v-card-title primary-title>
        {{ props.productData.title }}
      </v-card-title>
      <v-card-subtitle>
        {{ props.productData.brand }}
      </v-card-subtitle>
      <v-img :src="props.productData.thumbnail"></v-img>
      <v-card-text> {{ props.productData.price }} $ </v-card-text>
      <v-btn color="info">info</v-btn>
      
    </v-card>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  productData: {
    type: Object,
    requared: true,
  },
  
});
const emit = defineEmits(["item-clicked"]);

const openItemPage = (productId) => {
  emit("item-clicked", productId);
};
</script>

<style scoped></style>
