<template>
    
        <div v-if="!showPopup" class="py-12 text-center">
          <v-icon
            class="mb-6"
            color="success"
            icon="mdi-check-circle-outline"
            size="128"
          ></v-icon>

          <div class="text-h4 font-weight-bold">Product has been added</div>
        </div>
    
</template>

<script setup>
import {ref, watch} from 'vue';
import { useProductsStore } from '@/store/ProductsStore';
const store = useProductsStore()
const showPopup = ref(false)


watch(() => store.productAddedToCart, (newValue) => {
    
    if(newValue){
        showPopup.value = true;
        console.log("showPopup set to true");
        setTimeout(() => {
            showPopup.value = false;
            store.productAddedToCart = false;
            
        },2000);
    } 
})

</script>

<style lang="scss" scoped>

</style>