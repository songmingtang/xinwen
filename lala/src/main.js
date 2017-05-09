// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import $ from 'jquery'
import Vue from 'vue'
import App from './App'
import router from './router'
import Validator from 'vue-validator'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueForm from 'vue-form'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(iView)
Vue.use(VueResource)
Vue.use(Validator)
Vue.use(VueForm)

require('./assets/md5.js')

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

//  vue-cli
//  vue-router   luyou
//  vue-resource http
//  iview        ui
//import axios from 'axios'
//Vue.prototype.axios = axios;
//axios,
