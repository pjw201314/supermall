import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/home/Home")
const Category = () => import("../views/category/Caregory")
const Cart = () => import("../views/cart/Cart")
const ProFlie = () => import("../views/profile/ProFile")
Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: "/home"
  },
  {
    path: '/home',
    component:Home
  },
  {
    path: '/cart',
    component:Cart
  },
  {
    path: '/category',
    component:Category
  },
  {
    path: '/profile',
    component:ProFlie
  }

];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
