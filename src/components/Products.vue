<template>
<div class="container-flex">
        <product-box v-for="product in products" :key="product.id" :product="product"></product-box>
</div>
</template>
<script>
import ProductBox from './ProductBox/ProductBox'

export default {
    components: {
        ProductBox
    },
    computed: {
        products () {
            return this.$store.getters.loadedProducts
        }
    }
}
</script>

<style scoped>

</style>
