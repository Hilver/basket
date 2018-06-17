<template>
<div id="app">
    <div id="menu"><wish-list></wish-list><basket-cart></basket-cart></div>
    <router-view></router-view>  
</div>
</template>

<script>
import Products from './components/Products'
import BasketCart from './components/Basket/BasketCart'
import WishList from './components/WishList/Wishlist'

export default {
    components: {
        Products,
        BasketCart,
        WishList
    },
    name: 'App'
}
</script>

<style>
#app {
    margin: 0 auto;
}

#menu {
    height: 50px;
    background-color: #3077e8;
    display: flex;
    justify-content: flex-end;
}

.row {
    display: flex;
    flex-direction: row;
}

.container-flex{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.menu-item {
    margin: 5px 10px;
    padding: 0px;
    width: 40px;
    height: 100%;
}

.icon-in-menu {
  position: relative;
  color: white;
  cursor: pointer;
  text-align: center;
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}

.products-in-list-num {
    width: 20px;
    height: 20px;
    margin: 0px;
    padding: 0px;
    position: absolute;
    top: 20px;
    left: 0px;
    border: 1px solid #f44242;
    border-radius: 50%;
    color: #fff;
    background-color: #f44242;
    font-weight: bold;
}

button {
    cursor: pointer;
}
</style>
