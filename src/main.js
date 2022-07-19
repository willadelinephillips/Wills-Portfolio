import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import About from "./views/About.vue";
import Home from "./views/Home.vue";
import Typer from "./views/Typer.vue";
import Mysteries from "./views/Mysteries";


const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: '/typer', component:Typer },
    { path: '/mysteries', component:Mysteries },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  const app = createApp(App);
  app.use(router);
  app.mount("#app");