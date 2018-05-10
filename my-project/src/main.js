// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import axios from 'axios'
var VueCookie = require('vue-cookie');
import echarts from 'echarts'
import router from './router'
import VueI18n from 'vue-i18n'
require ('./commonStyle/common.css');

Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios  //axios并不是vue插件，所以不能 使用Vue.use()
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueCookie);//cookie插件
Vue.use(VueI18n) // 语言翻译
import RegionPicker from 'vue-region-picker'
import CHINA_REGION from 'china-area-data'
import configCom from './util/config.js'

Vue.prototype.config = configCom//引用全局方法

Vue.use(RegionPicker, {
  region: CHINA_REGION,
  vueVersion: 2
})

const i18n = new VueI18n({
  locale: 'zh',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh': require('./lang/zh'),   // 中文语言包
    'en': require('./lang/en')    // 英文语言包
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,  // 不要忘记
  router,
  components: { App },
  template: '<App/>'
})



