import Vue from 'vue';
import App from './App.vue';

import ComponentLibrary from 'ui-library-starter-test';

import 'ui-library-starter-test/dist/ui-library-starter-test.css';

import store from 'ui-library-starter-test/src/store/index.js';

Vue.use(ComponentLibrary);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
