import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

import Echo from "laravel-echo";
import socketio from "socket.io-client";

window.Echo = new Echo({
  broadcaster: "socket.io",
  client: socketio,
  host: window.location.hostname + ":6001",
  // authorizer: (channel, options) => {
  //     return {
  //         authorize: (socketId, callback) => {
  //             console.log('options', options);
  //             axios.post('https://local.dev.regard.ru' + '/broadcasting/auth', {
  //                 socket_id: socketId,
  //                 channel_name: channel.name
  //             })
  //             .then(response => {
  //                 callback(false, response.data);
  //             })
  //             .catch(error => {
  //                 callback(true, error);
  //             });
  //         }
  //     };
  // },
});

new Vue({
  render: h => h(App),
}).$mount('#app')
