export default {
    state: {
        wishlist: []
    },
    mutations: {
        setToWishlist (state, payload) {
            state.wishlist.push(payload)
        },
        removeFromWishlist (state, payload) {
            state.wishlist = state.wishlist.filter(product => {
                return product.name !== payload.name
            })
        }
    },
    actions: {
        addToWishlist ({commit}, payload) {
            const product = {
                name: payload.name,
                sku: payload.sku
            }
            commit('setToWishlist', product)
        },
        removeFromWishlist ({commit}, payload) {
            const product = {
                name: payload.name,
                sku: payload.sku
            }
            commit('removeFromWishlist', product)
        }
    },
    getters: {
        loadedWishlist (state) {
            return state.wishlist
        },
        isOnWishlist (state) {
            return (productSku) => {
                let isOnWishlist = state.wishlist.filter(product => {
                    return product.sku === productSku
                })
                if (isOnWishlist.length > 0) {
                    return true
                } else {
                    return false
                }
            }
        }
    }
}
