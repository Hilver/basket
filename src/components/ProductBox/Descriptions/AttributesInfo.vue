<template>
    <table v-if="this.$store.getters.loadedAttributesIdValue.length">
            <tbody>
                <tr>
                    <td class="title">{{ product.name | firstUp}}</td>
                </tr>
                <tr v-for="(attribute, index) in attributes" :key="attribute.id">
                    <td><span class="attributes-name">{{attribute.name | firstUp}}:</span> {{ attributesValue[index] }}</td>
                </tr>
            </tbody>
        </table>
</template>

<script>
    export default {
        props: ['product'],
        computed: {
            attributes () {
                return this.$store.getters.loadedAttributes
            },
            attributesValue () {
                return this.$store.getters.loadProductAttributes(this.product.id).map((attributes, index) => {
                    if (attributes.length === 1) {
                        return this.attributesIdValue[index][attributes - 1]
                    } else {
                        let arrayAttributes = []
                        for (let i = 0; attributes.length > i; i++) {
                            arrayAttributes.push(this.attributesIdValue[index][attributes[i] - 1])
                        }
                        return arrayAttributes.join(' | ')
                    }
                })
            },
            attributesIdValue () {
                return this.$store.getters.loadedAttributesIdValue
            }
        }
    }
</script>

<style scoped>

.attributes-name {
    font-weight: bold;
}

.title {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0px;
}
</style>
