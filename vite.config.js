// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";
import { sign } from "crypto";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Your main entry point (e.g., home page)
        about: resolve(__dirname, "about.html"), // Additional HTML pages
        contact: resolve(__dirname, "contact.html"),
        products: resolve(__dirname, "products.html"),
        addToCart: resolve(__dirname, "addToCart.html"),
        signin: resolve(__dirname,"signin.html"),
        signup: resolve(__dirname,"signup.html")
        // Add more entry points for other HTML files as needed
      },
    },
  },
});
