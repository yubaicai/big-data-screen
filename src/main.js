import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import Components from '@/components/index';
// 引入echarts
import echarts from 'echarts'

Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;
Vue.use(ElementUI)
    .use(Components);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
