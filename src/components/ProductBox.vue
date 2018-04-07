<template>
<div class="product-box" v-if="showBox">
        <div class="image">
        <img v-bind:src="'../static/products/' + product.image">
        </div>       
        <div class="title">{{product.name}}</div>
        <table>
            <tbody>
                <tr v-for="(attribute,index) in attributes" :key="attribute.id">
                    <td>{{attribute.name}}: 
                        <span v-if="attribute.type === 'singleValue'">{{ attributesValue[index]['.value'].split("|")[product.attributes[index] - 1] }}</span>
                        <span v-else>
                            {{ product.attributes[index].split("|").map((el) => attributesValue[index]['.value'].split("|")[el-1]).reduce((acc,curr) => acc + ',' + curr) }}
                        </span></td>
                </tr>
            </tbody>
        </table>
        <div v-if="product.price.type === 'special'" style=" background-color: yellow">
        <div class="price">{{ product.price.value.toFixed(2) }} pln</div>
        </div>        
        <div v-else class="price">{{ product.price.value.toFixed(2) }} pln</div>
        <div>
            <button class="button" style="background-color: red;" v-on:click="addToBasket(product)">Koszyk</button><button class="button" style="background-color: blue;" v-on:click="wishList(product)">{{ btnWishListText }}</button>
        </div>
        <div>
            <button class="delete-btn" v-on:click="deleteFromList">Usuń z Listy</button>
        </div>
    </div>
    </template>
    <script>
    import BasketData from '../store/BasketCartData'
    import WishListData from '../store/WishListData'

    export default {
        props: ['product', 'attributes', 'attributesIdValue'],
        data () {
            return {
                attributesValue: this.attributesIdValue,
                showBox: true,
                isOnwishList: false,
                btnWishListText: 'Dodaj do ulubionych'
            }
        },
        methods: {
            addToBasket: function (product) {
                var isInBasket = false
                for (var i = 0; i < BasketData.data.cart.length; i++) {
                    if (BasketData.data.cart[i].name === product.name) {
                        BasketData.data.cart[i].amount++
                        BasketData.data.productsAmount++
                        isInBasket = true
                        break
                    }
                }

                if (!isInBasket) {
                    var newProduct = {id: product.id, name: product.name, price: product.price.value, img: product.image, amount: 1}
                    BasketData.data.cart.push(newProduct)
                    BasketData.data.productsAmount++
                }
            },
            wishList: function (product) {
                if (!this.isOnWishList) {
                    this.isOnWishList = true
                    this.btnWishListText = 'Usuń z ulubionych'
                    WishListData.data.list.push(product.name)
                    console.log(WishListData.data.list)
                } else {
                    this.isOnWishList = false
                    this.btnWishListText = 'Dodaj do ulubionych'
                    var deleteItem = WishListData.data.list.indexOf(product.name)
                    if (deleteItem >= 0) {
                        WishListData.data.list.splice(deleteItem, 1)
                    }
                    console.log(WishListData.data.list)
                }
            },
            deleteFromList: function () {
                this.showBox = false
            }
        }
    }
    </script>   

    <style>

.product-box {
  width: 350px;
  height: auto;
  border: 2px solid #000;
  padding: 15px;
  margin: 2px;
}

.title {
    font-size: 16px;
    font-weight: bold;
    margin: 10px;
}

.price {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
}

.button {
    width: 156px;
    height: 40px;
    text-align: center;    
    color: white;
    font-size: 16px;
    font-weight: bold;
    margin: 10px 1px;
}

.delete-btn {
    width: 314px;
    height: 40px;
    text-align: center;    
    color: white;
    font-size: 16px;
    font-weight: bold;
    background-color: green;
    margin-bottom: 10px;
}

    </style>
