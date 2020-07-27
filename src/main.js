import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

import router from "./route.js"
new Vue({
  el: '#app',
  router,  // 注入到根实例中
  render: h => h(App)
})
