<template>
<div class="menu-item">
<div v-on:click="basketShowHide" class="icon-in-menu"><i class="material-icons">shopping_cart</i> <span class="products-in-list-num">{{ this.basketCart.length }}</span></div>
<div class="showBasket" v-if="showBasket">
  <div class="productBox" v-for="(product,index) in basketCart" :key="index" v-if="product.amount > 0">
    <div><img :src="'../static/products/' + product.img" style="width: 50px;"> </div>
  <div>Nazwa: {{ product.name }}</div>
  <div>Cena łącznie: {{ (product.price * product.amount) | toFixed }} pln</div>
  <div> Ilość: {{ product.amount }}</div>
  <button v-on:click="addInBasket(product)">Dodaj</button>
  <button v-on:click="delInBasket(product)">Usuń</button>
  </div>
</div>
</div>
</template>
<script>

export default {
    data () {
        return {
            showBasket: false
        }
    },
    methods: {
        addInBasket (product) {
            this.$store.dispatch('addInBasket', product)
        },
        delInBasket (product) {
            if (product.amount === 1) {
                this.$store.dispatch('removeFromBasket', product)
            } else {
                this.$store.dispatch('delInBasket', product)
            }
        },
        basketShowHide () {
            this.showBasket = !this.showBasket
        }
    },
    computed: {
        basketCart () {
            return this.$store.getters.currentBasket
        }
    }
}
</script>

<style scoped>

.material-icons {
    padding: 0px;
    margin: 0px auto;
    font-size: 36px;
}
.showBasket {
  position: fixed;
  top: 20px;
  right: 20px;
  height: auto;  
  width: 300px;
  background-color: black;
  z-index: 9999;
}

.productBox {
  color: white;
  padding: 5px;
  border-bottom: 1px solid white;
  padding: 5px;
}

</style>
