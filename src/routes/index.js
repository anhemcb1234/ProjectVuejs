import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

export const router = new VueRouter({
    routes:[
        {
            path: '/',
            name: 'Home',
            component:()=> import('@/pages/HomeComponent')
        },
        {
            path: '/product-detail',
            name: 'ProductDetail',
            component:()=> import('@/pages/ProductDetailComponent')
        },
        {
           path:'/sign-in',
           name:'SignIn',
           component:()=> import('@/pages/SignInComponent')
        },
        {
            path:'/login',
            name:'login',
            component:()=> import('@/pages/LoginComponent')
         },
        {
            path: '/cart',
            name: 'cart',
            component:()=> import('@/pages/CartComponent')
        },
        {
            path: '/check-out',
            name: 'checkout',
            component:()=> import('@/pages/CheckComponent')
        },
        {
            path: '/update-profile',
            name: 'update-profile',
            component:()=> import('@/pages/UpdateProfileComponent')
        },
        {
            path: '/order-tracking',
            name: 'ordertracking',
            component:()=> import('@/pages/OrderTrackingCompoent')
        },
        {
            path: '/order-detail',
            name: 'orderdetail',
            component:()=> import('@/pages/OrderCompoent')
        },
        {
            path: '/filter-products',
            name: 'orderdetail',
            component:()=> import('@/pages/FilterProductComponent')
        },

    ],
    mode:"history"
})