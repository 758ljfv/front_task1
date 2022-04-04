import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



// var arr = [];
// for (let i = 1; i<=100; i++){
//   var contact = {
//     id : i,
//     name: 'name-' + i,
//   }
//   console.log(contact)
//   arr.push(contact);
// }
// Vue.mixin({
//   data: function (){
//     return arr
//   }
// })
// console.log(arr);
