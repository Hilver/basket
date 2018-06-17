<template>
    <div class="basket-button">
        <button v-if="!isInBasket" class="button add-to-basket" v-on:click="addToBasket(product)">Dodaj do koszyka</button>
        <button v-if="isInBasket" class="button remove-from-basket" v-on:click="removeFromBasket(product)">Usuń z koszyka</button>
    </div>
</template>

<script>
    export default {
        props: ['product'],
        methods: {
            addToBasket (product) {
                this.$store.dispatch('addToBasket', product)
            },
            removeFromBasket (product) {
                this.$store.dispatch('removeFromBasket', product)
            }
        },
        computed: {
            isInBasket () {
                return this.$store.getters.isInBasket(this.product.sku)
            }
        }
    }
</script>

<style scoped>

.button {
    text-align: center;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin: 10px 5px;
    display: inline;
}

.basket-button {
    width: 80%;
    height: 45px;
}

.add-to-basket {
    background-color: #f44242;
    width: 100%;
    height: 100%;
}

.remove-from-basket {
    background-color: #2d9618;
    width: 100%;
    height: 100%;
}

</style>
