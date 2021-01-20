// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//导入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//导入ant-design-vue
import { DatePicker } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
//导入button组件
import { Button } from 'ant-design-vue';
import router from './router'
import Home from './components/Home'
Vue.use(ElementUI);
Vue.use(DatePicker);
Vue.use(Button);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {Home},
  template: '<Home/>'
});
