<template>
    <div>
        <div class="image">
            <img v-bind:src="'../static/products/' + product.image">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['product']
    }
</script>

<style scoped>

</style>
