import * as firebase from 'firebase'

export default {
    state: {
        products: [],
        attributes: [],
        attributesIdValues: []
    },
    mutations: {
        setLoadProducts (state, payload) {
            state.products = payload
        },
        setLoadAttributes (state, payload) {
            state.attributes = payload
        },
        setLoadAttributesIdValue (state, payload) {
            state.attributesIdValues = payload
        }
    },
    actions: {
        loadProducts ({commit}) {
            firebase.database().ref('products').once('value')
            .then((data) => {
                const products = []
                const obj = data.val()
                for (let key in obj) {
                    products.push({
                        id: key,
                        name: obj[key].name,
                        image: obj[key].image,
                        priceType: obj[key].price.type,
                        priceValue: obj[key].price.value,
                        quantity: obj[key].quantity,
                        sku: obj[key].sku,
                        attributes: obj[key].attributes,
                        amount: 0
                        // w przypadku trzymania sesji, amount załadować z local storage
                    })
                }
                commit('setLoadProducts', products)
            })
            .catch(error => {
                console.log(error)
            })
        },
        loadAttributesIdValues ({commit}) {
            firebase.database().ref('attributesIdValue').once('value')
            .then((data) => {
                const attributesIdValue = []
                const obj = data.val()
                for (let key in obj) {
                    attributesIdValue.push({
                        key: obj[key]
                    })
                }
                commit('setLoadAttributesIdValue', attributesIdValue)
            }).catch((error) => {
                console.log(error)
            })
        },
        loadAttributes ({commit}) {
            firebase.database().ref('attributes').once('value')
            .then((data) => {
                const attributes = []
                const obj = data.val()
                for (let key in obj) {
                    attributes.push({
                        id: obj[key].id,
                        name: obj[key].name,
                        type: obj[key].type
                    })
                }
                commit('setLoadAttributes', attributes)
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    getters: {
        loadedProducts (state) {
            return state.products
        },
        loadedAttributes (state) {
            return state.attributes
        },
        loadedAttributesIdValue (state) {
            return state.attributesIdValues.map(value => {
                return value.key.split('|')
            })
        },
        loadProductAttributes (state) {
            return (productId) => {
                return state.products.find((product) => {
                    return productId === product.id
                }).attributes.map(attribute => {
                    return attribute.split('|').map(value => {
                        return Number(value)
                    })
                })
            }
        }
    }
}
