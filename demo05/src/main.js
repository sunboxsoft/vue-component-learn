// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import TabCardF from '@/components/TabCardF'
import TabCardC from '@/components/TabCardC'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component(TabCardF.name, TabCardF)
Vue.component(TabCardC.name, TabCardC)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})