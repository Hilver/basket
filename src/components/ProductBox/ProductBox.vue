<template>
<div class="product-box" v-if="showBox">
    <div class="row">
        <product-image :product="product"></product-image>
        <attributes-info :product="product"></attributes-info>
    </div>
        <price-info :product="product"></price-info>
        <buttons :product="product"></buttons>
        <button class="delete-btn" v-on:click="deleteFromList">X</button>
    </div>
    </template>
    <script>
    import AttributesInfo from './Descriptions/AttributesInfo'
    import Buttons from './Buttons/Buttons'
    import PriceInfo from './Descriptions/PriceInfo'
    import ProductImage from './Descriptions/ProductImage'

    export default {
        props: ['product'],
        components: {
            AttributesInfo,
            Buttons,
            PriceInfo,
            ProductImage
        },
        data () {
            return {
                showBox: true
            }
        },
        methods: {
            deleteFromList: function () {
                this.showBox = false
            }
        }
    }
    </script>

    <style scoped>

.product-box {
  position: relative;
  width: 350px;
  height: auto;
  border: 2px solid #000;
  padding: 15px;
  margin: 2px;
}

.delete-btn {
    width: 30px;
    height: 30px;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: inherit;
    position: absolute;
    top: 10px;
    right: 10px;
    font-weight: bold;
    margin: 0px;
    padding: 0px;
    font-size: 18px;
    cursor: pointer;
}
    </style>
