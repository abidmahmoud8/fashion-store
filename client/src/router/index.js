import Vue from "vue";
import VueRouter from "vue-router";
import Showcase from "../views/Showcase.vue";
import ShowcaseByCategory from "../views/ShowcaseByCategory";
import ProductsList from "../views/ProductsList";
import ProductOne from "../views/ProductOne";
import Auth from "../views/Auth";
import ValidateCommand from "../views/ValidateCommand";
import Cart from "../views/Cart";
import WitchList from "../views/WitchList";
import Dashboard from "../views/Dashboard";
import Admin from "../views/Admin";
import compte from "../components/Showcase/compte";
import commandes from "../components/Showcase/commandes";
import adresses from "../components/Showcase/adresses";
import donnes from "../components/Showcase/donnes";
import DashboardAdmin from "../components/DashboardAdmin/DashboardAdmin";
import Products from "../components/DashboardAdmin/Products";
import Settings from "../components/DashboardAdmin/Settings";
import Categories from "../components/DashboardAdmin/Categories";
import CommandesAdmin from "../components/DashboardAdmin/CommandesAdmin";
import CategoriesForm from "../components/DashboardAdmin/CategoriesForm";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Showcase",
    component: Showcase
  },{
    path :'*',
    redirect : '/'
  },{
    path: "/hommes",
    name: "ShowcaseByCategory",
    component: ShowcaseByCategory,
  },{
    path: "/hommes/products",
    name: "ProductsList",
    component: ProductsList,
  },{
    path: "/hommes/products/one",
    name: "ProductOne",
    component: ProductOne,
  
  },{
    path: "/auth",
    name: "Auth",
    component: Auth,
  },{
    path: "/cart",
    name: "Cart",
    component: Cart,
  },{
    path: "/validatecommand",
    name: "ValidateCommand",
    component: ValidateCommand,
  },{
    path: "/witchlist",
    name: "WitchList",
    component: WitchList,
  },{
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children : [
      {
        path :'compte',
        component : compte,
        name : 'compte'
      },
      {
        path :'commandes',
        component : commandes,
        name : 'commandes'
      },
      {
        path :'adresses',
        component : adresses,
        name : 'adresses'
      },
      {
        path :'donnes',
        component : donnes,
        name : 'donnes'
      },
      
    ]
  },
  {
    path :'/admin',
    component : Admin,
    name : 'admin',
    children : [
      {
        path :'dashboard',
        component : DashboardAdmin,
        name : 'dashboard'
      },
      {
        path :'commandes',
        component : CommandesAdmin,
        name : 'commandes'
      },
      {
        path :'settings',
        component : Settings,
        name : 'settings'
      },
      {
        path :'products',
        component : Products,
        name : 'products'
      },
      {
        path :'categories',
        component : Categories,
        name : 'categories',
        children : [
          
  
        ]
      },{
        path :'categories/add',
        component : CategoriesForm,
        name : 'add'
      }
      
    ]

  }
  // {
  //   path :'/:id',
  //   components : {
  //     hommes : require('./../components/Showcase/ShowcaseByCategory').default,
  //     femmes : require('./../components/Showcase/ShowcaseByCategory').default,
  //     enfantss : require('./../components/Showcase/ShowcaseByCategory').default
  //   },
  //   name : 'ShowcaseByCategory'
  // },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
