// main.js
var Vue = require('vue');
var Vuex = require('vuex');
var Store = require('./store.js');
var App = require('./App.vue');

Vue.use(Vuex);
var store = new Vuex.Store(Store);

var app = new Vue({
  el: '#app',
  store,
  render: function (createElement) {
    return createElement(App)
  },
  components: {
    App
  }
})
