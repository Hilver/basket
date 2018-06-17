<template>
    <div>
   <div v-if="product.priceType === 'special'" class="special-price">{{ product.priceValue | toFixed }} pln</div>
   <div v-else class="price">{{ product.priceValue | toFixed }} pln</div>
    </div>
</template>

<script>
    export default {
        props: ['product']
    }
</script>

<style scoped>

.price {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
}

.special-price {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    background-color: #ff0;
}

</style>