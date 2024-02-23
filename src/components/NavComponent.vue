<template>
  <div>
    <v-card class="d-flex d-sm-none">
      <v-layout>
        <v-navigation-drawer v-model="drawer" temporary>
          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item
              prepend-icon="mdi-view-dashboard"
              title="Home"
              value="home"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-forum"
              title="About"
              value="about"
            ></v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main :style="{ height: drawer ? '200px' : '0' }">
          <div class="d-flex justify-center align-center h-100"></div>
        </v-main>
        <v-btn color="primary" @click.stop="drawer = !drawer"> Toggle </v-btn>
      </v-layout>
    </v-card>
  </div>
  <div
    class="d-flex flex-row ma-2 pa-2 justify-center align-center bg-tertiary"
    scroll-threshold="0"
  ><v-img
      @click="router.push({ name: 'home' })"
      :class="cursos-pointer"
      :height="180"
      :width="50"
      src="@/assets/images/sitnica4.png"
    ></v-img>
    

    
    <v-tabs fixed-tabs bg-color="transparent" class="d-none d-sm-flex">
      <v-tab v-for="link in links" :key="link.text" :to="link.route">
        {{ link.text }}
      </v-tab>
    </v-tabs>
    <v-spacer></v-spacer>
    <CartComponent />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import CartComponent from "./CartComponent.vue";
const router = useRouter();
const drawer = ref(null);
const links = [
  { icon: "home", text: "Pocetna", route: "/" },
  { icon: "shop", text: "Shop", route: "/shop" },
  { icon: "about", text: "O nama", route: "/about" },
  { icon: "constact", text: "Kontakt", route: "/contact" },
];
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Dancing+Script:wght@400;500;700&family=Edu+TAS+Beginner:wght@400;500;700&family=Ephesis&family=Fira+Mono:wght@400;700&family=Nunito:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Quicksand:wght@400;700&family=Raleway:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Roboto:ital,wght@0,500;0,700;1,300&display=swap");
h1 {
  font-family: "Dancing Script", cursive;
}
</style>
