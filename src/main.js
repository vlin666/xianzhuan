// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'

import './modules/rem'
import "./stylesheets/main.scss"

import axios from 'axios'
Vue.prototype.$http = axios;

import { Search } from 'vant';
Vue.use(Search);
import { Icon } from 'vant';
Vue.use(Icon);
//引入mint-ui js component
import { InfiniteScroll, Navbar, TabItem } from 'mint-ui';
Vue.use(InfiniteScroll);
Vue.component("mt-tabbar", Navbar);
Vue.component('mt-tab-item', TabItem);

//引入redirective
import "./modules/directive"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
