<template>
    <div class="menu-item">
        <div class="icon-in-menu"><i class="material-icons">mood</i> <span class="products-in-list-num">{{ loadedWishlist.length }}</span></div>
    </div>
</template>

<script>
    export default {
        computed: {
            loadedWishlist () {
                return this.$store.getters.loadedWishlist
            }
        }
    }
</script>

<style scoped>

.material-icons {
    padding: 0px;
    margin: 0px auto;
    font-size: 36px;
}

</style>
