<template>
    <div class="container-flex">
        <basket-button :product="product"></basket-button>
        <wishlist-button :product="product"></wishlist-button>
    </div>
</template>

<script>
import BasketButton from './BasketButton'
import WishlistButton from './WishlistButton'

export default {
    props: ['product'],
    components: {
        BasketButton,
        WishlistButton
    }
}
</script>

<style scoped>

</style>
