<template>
  <v-app>
    
   <NavComponent/>
   <v-main>
    <router-view />
  </v-main>
  
    <FooterComponent/>  
  

  </v-app>
</template>

<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
</script>
<style scoped>
.v-application {
  background-color: #ADBC9F;
}
</style>

