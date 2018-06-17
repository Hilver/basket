import Vue from 'vue'

import App from './App'
import router from './router'
import {store} from './store'
import * as firebase from 'firebase'
import firebaseConfig from '../config/firebase'
import ArrayToStringFilter from './filters/toString'
import ToFixedFilter from './filters/toFixed'
import firstLetterUppercase from './filters/firstLetterUppercase'

Vue.config.productionTip = false

Vue.filter('string', ArrayToStringFilter)
Vue.filter('toFixed', ToFixedFilter)
Vue.filter('firstUp', firstLetterUppercase)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
    created () {
        firebase.initializeApp(firebaseConfig)
        this.$store.dispatch('loadProducts')
        this.$store.dispatch('loadAttributes')
        this.$store.dispatch('loadAttributesIdValues')
    }
})
