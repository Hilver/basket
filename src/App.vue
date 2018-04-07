<template>
<div id="app">
    <basket-cart></basket-cart>
    <products :products="products" :attributes="attributes" :attributesIdValue="attributesIdValue"></products>    
    <router-view/>
</div>
</template>

<script>
import Products from './components/Products'
import BasketCart from './components/BasketCart'
import Firebase from 'firebase'
import firebaseConfig from '../config/firebase.js'

let app = Firebase.initializeApp(firebaseConfig)
let db = app.database()

let productsRef = db.ref('products')
let attributesRef = db.ref('attributes')
let attributesIdValueRef = db.ref('attributesIdValue')

export default {
    firebase: {
        products: productsRef,
        attributes: attributesRef,
        attributesIdValue: attributesIdValueRef
    },
    components: {
        Products,
        BasketCart
    },
    name: 'App'
}
</script>

<style>
#app {
    margin: 0 auto;
}
</style>
