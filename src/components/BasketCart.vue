<template>
<div>
<div class="basket"><button>Koszyk</button></div>
<div class="showBasket">
  <div class="productBox" v-for="(product,index) in basketCart" :key="index" v-show="product.amount > 0">
    <div><img :src="'../static/products/' + product.img" style="width: 50px;"> </div>
  <div>Nazwa: {{ product.name }}</div>
  <div>Cena łącznie: {{ (product.price * product.amount).toFixed(2) }}</div>
  <div> Ilość: {{ product.amount }}</div>
  <button v-on:click="add(product.name)">Dodaj</button>
  <button v-on:click="del(product.name)">Usuń</button>
  </div>
</div>
</div>
</template>
<script>
import BasketData from '../store/BasketCartData'

export default {
    data () {
        return {
            basketCart: BasketData.data.cart
        }
    },
    methods: {
        add: function (value) {
            for (var i = 0; i < BasketData.data.cart.length; i++) {
                if (BasketData.data.cart[i].name === value) {
                    BasketData.data.cart[i].amount++
                }
            }
        },
        del: function (value) {
            for (var i = 0; i < BasketData.data.cart.length; i++) {
                if (BasketData.data.cart[i].name === value) {
                    BasketData.data.cart[i].amount--
                }
            }
        }
    }
}
</script>

<style scoped>

.basket {
position: fixed;
top: 20px;
right: 20px;
width: 80px;
height: 80px;
color: white;
background-color: black;
cursor: pointer;
text-align: center;
}

.showBasket {
  position: fixed;
  top: 20px;
  right: 20px;
  height: auto;  
  width: 300px;
  background-color: black;  
}

.productBox {
  color: white;
  padding: 5px;
  border-bottom: 1px solid white;
  padding: 5px;
}

</style>
