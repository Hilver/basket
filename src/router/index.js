import Vue from 'vue'

import Router from 'vue-router'
import Products from '../components/Products'
import BasketCart from '../components/BasketCart'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Products',
        component: Products
    },
    {
        path: '/basket',
        name: 'Basket Cart',
        component: BasketCart
    }
    ]
})
