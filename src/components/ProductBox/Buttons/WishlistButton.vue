<template>
    <div class="wishlist-button">
        <button v-if="!isOnWishlist" class="button add-to-wishlist" v-on:click="addToWishlist(product)"><i class="material-icons">thumb_up_alt</i></button>
        <button v-if="isOnWishlist" class="button remove-from-wishlist" v-on:click="removeFromWishlist(product)"><i class="material-icons">thumb_up_alt</i></button>
    </div>
</template>

<script>
    export default {
        props: ['product'],
        methods: {
            addToWishlist (product) {
                this.$store.dispatch('addToWishlist', product)
            },
            removeFromWishlist (product) {
                this.$store.dispatch('removeFromWishlist', product)
            }
        },
        computed: {
            isOnWishlist () {
                return this.$store.getters.isOnWishlist(this.product.sku)
            }
        }
    }
</script>

<style scoped>

.button {
    text-align: center;
    display: inline;
    background: none;
    color: inherit;
    border: none;
    padding: 10px;
    margin-left: 10px;
    font: inherit;
    cursor: pointer;
    outline: inherit;
}

.wishlist-button {
    width: 20%;
    height: 45px;
}

.remove-from-wishlist > .material-icons{
    color: blue;
    animation: pulse 1s infinite;
}

.material-icons {
    font-size: 40px;
    margin: 0 auto;
    padding: 0;
}

@-webkit-keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
}

@-moz-keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
}

</style>
