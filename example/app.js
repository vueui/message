
import Vue from 'vue'
import domReady from 'domready'
import uiComponent from '../index.js'
import tpl from './app.jade'

Vue.use(uiComponent)

domReady(() => {
    let app = new Vue({
        template: tpl
    })

    app.$mount('#app')
})