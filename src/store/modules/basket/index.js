
export default {
    state: {
        basket: []
    },
    mutations: {
        addToBasket (state, payload) {
            state.basket.push(payload)
        },
        updateBasket (state, payload) {
            const product = state.basket.find(product => {
                return product.sku === payload.sku
            })
            if (product.amount) {
                product.amount = payload.amount
            }
            if (product.quantity) {
                product.quantity = payload.quantity
            }
        },
        removeFromBasket (state, payload) {
            state.basket = state.basket.filter(product => {
                return product.sku !== payload.sku
            })
        }
    },
    actions: {
        addToBasket ({commit}, payload) {
            const product = {
                name: payload.name,
                price: payload.priceValue,
                quantity: payload.quantity - 1,
                sku: payload.sku,
                img: payload.image,
                amount: 1
            }
            commit('addToBasket', product)
        },
        addInBasket ({commit, getters}, payload) {
            let basket = getters.currentBasket
            const updateProduct = {
                name: payload.name,
                sku: payload.sku,
                quantity: payload.quantity - 1,
                amount: payload.amount + 1
            }
            for (let i = 0; i < basket.length; i++) {
                if (basket[i].sku === payload.sku) {
                    commit('updateBasket', updateProduct)
                    return true
                }
            }
        },
        delInBasket ({commit, getters}, payload) {
            let basket = getters.currentBasket
            const updateProduct = {
                name: payload.name,
                sku: payload.sku,
                quantity: payload.quantity + 1,
                amount: payload.amount - 1
            }
            for (let i = 0; i < basket.length; i++) {
                if (basket[i].sku === payload.sku) {
                    commit('updateBasket', updateProduct)
                    return true
                }
            }
        },
        removeFromBasket ({commit}, payload) {
            commit('removeFromBasket', payload)
        }
    },
    getters: {
        currentBasket (state) {
            return state.basket
        },
        isInBasket (state) {
            return (productSku) => {
                let isInBasket = state.basket.filter(product => {
                    return product.sku === productSku
                })
                if (isInBasket.length > 0) {
                    return true
                } else {
                    return false
                }
            }
        }
    }
}
