<template>
<div class="container-flex">    
        <product-box v-for="product in products" :key="product.id" :product="product" :attributes="attributes" :attributesIdValue="attributesIdValue"></product-box>    
</div>
</template>
<script>
import ProductBox from './ProductBox'

export default {
    props: ['products', 'attributes', 'attributesIdValue'],
    components: {
        ProductBox
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container-flex{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}


</style>