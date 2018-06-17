import Vue from 'vue'
import Vuex from 'vuex'

import Products from './modules/products'
import Basket from './modules/basket'
import Wishlist from './modules/wishlist'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        product: Products,
        basket: Basket,
        wishlist: Wishlist
    }
})
