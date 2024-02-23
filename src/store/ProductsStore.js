// Utilities
import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
    productAddedToCart: false,
    cart: [],
    selectedColors: null,
  }),
  getters: {
    countCartItems() {
      return this.cart.length;
    },
    totalItems() {
      let total = 0;
      for (let item of this.cart.values()) {
        total += item.quantity;
      }
      return total;
    },
    getCartItems() {
      return this.cart;
    },
    totalPrice() {
      let total = 0;
      for (let item of this.cart.values()) {
        total += item.quantity * item.price;
      }
      return total.toFixed(2);
    },
  },
  actions: {
    fetchProductsFromDB() {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((json) => {
          this.products = json.products;
        });
    },
    addToCart(item) {
      let index = this.cart.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cart[index].quantity += 1;
      } else {
        item.quantity = 1;
        this.cart.push(item);
      }
      this.productAddedToCart = true; // Postavite productAddedToCart na true
      setTimeout(() => {
        this.productAddedToCart = false; // Resetirajte productAddedToCart na false nakon 2 sekunde
      }, 2000);
    },
    removeItem(name) {
      const i = this.cart.lastIndexOf(name);
      if (i > -1) this.cart.splice(i, 1);
    },

    incrementQ(item) {
      let index = this.cart.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cart[index].quantity += 1;
      }
    },
    decrementQ(item) {
      let index = this.cart.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cart[index].quantity -= 1;
        if (this.cart[index].quantity === 0) {
          this.cart = this.cart.filter((product) => product.id !== item.id);
        }
      }
    },
    selectColor(color) {
      if (this.selectedColors !== color) {
        this.selectedColors = color;
      } else {
        this.selectedColor = null;
      }
    },
  },
});
