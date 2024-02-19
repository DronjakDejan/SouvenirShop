<template>
  <div class="container">
    
    <v-container  fluid >
      <v-row   class="justify-center align-center pa-6 ma-6" >
        
        <v-col  xs="12" sm="12" md="12" lg="6"  align-self="center">
          <v-sheet  :elevation="2" ma="2" class="sheet "> <v-img src="/images/gettyimages-1293740060-612x612.jpg"></v-img> </v-sheet>
        </v-col >
        
        <v-col  xs="12" sm="12" md="6"  lg="6">
          <v-sheet  :elevation="2" ma="2" class="sheet "> <v-img src="/images/gettyimages-1293740060-612x612.jpg"></v-img> </v-sheet>
        </v-col>
        
        <v-col  xs="12" sm="12" md="6"  lg="6">
          <v-sheet  :elevation="2" ma="2" class="sheet "> <v-img src="/images/istockphoto-909093554-612x612.jpg"></v-img> </v-sheet>
        </v-col>
        
        <v-col xs="12" sm="12" md="6"  lg="6">
          <v-sheet :elevation="2" ma="2" class="sheet "> <v-img src="/images/gettyimages-1293740060-612x612.jpg"></v-img> </v-sheet>
        </v-col>
        
      </v-row>
    </v-container>
  
  </div>
</template>

<script setup></script>

<style scoped>

.sheet {
    width: 100%;
    height: 100%;
    background-color: aqua;
}

</style>
