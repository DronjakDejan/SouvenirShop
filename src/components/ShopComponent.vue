<template>
  <div class="shop">
    
    <v-container grid-list-xs>
      
      <v-row>
        <v-container class="spacing-playground pa-6" fluid>
      <v-row>
        <v-col
        class="d-flex align-center"
        cols="12"
        sm="6"
        md="4"
      >
      <v-select
      class="pe-2"
        clearable
        item-color="red"
        placeholder="search items"
        validate-on="submit lazy"
        bg-color="grey-lighten-3"
        chips
        label="Filter"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
        multiple
        variant="underlined"
      ></v-select>
      <v-select
      class="pe-2"
        clearable
        item-color="red"
        placeholder="search items"
        validate-on="submit lazy"
        bg-color="grey-lighten-3"
        chips
        label="Filter"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
        multiple
        variant="underlined"
      ></v-select>
      <v-select
      class="pe-2"
        clearable
        item-color="red"
        placeholder="search items"
        validate-on="submit lazy"
        bg-color="grey-lighten-3"
        chips
        label="Filter"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
        multiple
        variant="underlined"
      ></v-select>
    </v-col>
    </v-row>
    </v-container>
        <v-col
          v-for="product in store.products"
          :key="product.id"
          cols="12"
          md="4"
          sm="3"
          lg="2"
        >
          <ItemsComponent
            :product-data="product"
            @item-clicked="openItemPage(product.id)"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useProductsStore } from "@/store/ProductsStore";
import { onMounted } from "vue";
import router from "@/router";
import ItemsComponent from "@/components/ItemsComponent.vue";

const store = useProductsStore();
const openItemPage = (id) => {
  router.push({ name: "item", params: { id } });
};
onMounted(async () => {
  await store.fetchProductsFromDB();
});
</script>
