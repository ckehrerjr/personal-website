import Vue from 'vue';
import App from './App.vue';
import 'normalize.css/normalize.css';
import './assets/css/styles.scss';
import './assets/firebase/firebase';

new Vue({
  el: '#app',
  render: h => h(App)
});
