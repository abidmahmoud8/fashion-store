import Vue from "vue";
import VueRouter from "vue-router";
import Showcase from "../views/Showcase.vue";
import ShowcaseByCategory from "../views/ShowcaseByCategory";
import ProductsList from "../views/ProductsList";
import ProductOne from "../views/ProductOne";
import Auth from "../views/Auth";
import ValidateCommand from "../views/ValidateCommand";
import Cart from "../views/Cart";
import Test from "../views/Test";
import TestForm from "../views/TestForm";
import Dashboard from "../views/Dashboard";
import Admin from "../views/Admin";
import compte from "../components/Showcase/compte";
import commandes from "../components/Showcase/commandes";
import commandeDetail from "../components/Showcase/commandeDetail";
import info from "../components/Showcase/info";
import DashboardAdmin from "../components/DashboardAdmin/DashboardAdmin";
import Products from "../components/DashboardAdmin/Products";
import Categories from "../components/DashboardAdmin/Categories";
import CommandesAdmin from "../components/DashboardAdmin/CommandesAdmin";
import CategoriesForm from "../components/DashboardAdmin/CategoriesForm";
import ProductsForm from "../components/DashboardAdmin/ProductsForm";
import ProductsCategories from "../components/DashboardAdmin/ProductsCategories";
import ProductsFormEdit from "../components/DashboardAdmin/ProductsFormEdit";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Showcase",
    component: Showcase
  }, {
    path: '*',
    redirect: '/'
  }, {
    path: "/hommes",
    name: "ShowcaseByCategory",
    component: ShowcaseByCategory,
  }, {
    path: "/test",
    name: "Test",
    component: Test,
  }, {
    path: "/testform",
    name: "TestForm",
    component: TestForm,
  }, {
    path: "/enfants",
    name: "ShowcaseByCategory",
    component: ShowcaseByCategory,
  }, {
    path: "/femmes",
    name: "ShowcaseByCategory",
    component: ShowcaseByCategory,
  }, {
    path: "/hommes/products/:id",
    name: "ProductsList",
    component: ProductsList,
  }, {
    path: "/femmes/products/:id",
    name: "ProductsList",
    component: ProductsList,
  }, {
    path: "/enfants/products/:id",
    name: "ProductsList",
    component: ProductsList,
  }, {
    path: "/hommes/product/:id",
    name: "ProductOne",
    component: ProductOne,
  }, {
    path: "/enfants/product/:id",
    name: "ProductOne",
    component: ProductOne,
  }, {
    path: "/femmes/product/:id",
    name: "ProductOne",
    component: ProductOne,

  }, {
    path: "/auth",
    name: "Auth",
    component: Auth,
  }, {
    path: "/cart",
    name: "Cart",
    component: Cart,
  }, {
    path: "/validatecommand",
    name: "ValidateCommand",
    component: ValidateCommand,
  }, {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [{
        path: 'compte',
        component: compte,
        name: 'compte'
      },
      {
        path: 'commandes',
        component: commandes,
        name: 'commandes'
      },
      {
        path: 'commandes/:id',
        component: commandeDetail,
        name: 'commandeDetail'
      },
      {
        path: 'info',
        component: info,
        name: 'info'
      },
      
    ]
  },
  {
    path: '/admin',
    component: Admin,
    name: 'admin',
    children: [{
        path: 'dashboard',
        component: DashboardAdmin,
        name: 'dashboard'
      },
      {
        path: 'commandes',
        component: CommandesAdmin,
        name: 'commandes'
      },
      {
        path: 'commandes/:id',
        component: commandeDetail,
        name: 'commandeDetail'
      },
      {
        path: 'products',
        component: Products,
        name: 'products'
      }, {
        path: 'products/add',
        component: ProductsForm,
        name: 'add'
      }, {
        path: 'products/add/categories/:id',
        component: ProductsCategories,
        name: 'productscategories'
      }, {
        path: 'products/edit/:id',
        component: ProductsFormEdit,
        name: 'Productsformedit'
      },
      {
        path: 'categories',
        component: Categories,
        name: 'categories',
      }, {
        path: 'categories/add',
        component: CategoriesForm,
        name: 'add'
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;