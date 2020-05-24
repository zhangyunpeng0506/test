import * as mathUtils from './js/mathUtils'
import * as common from './js/common'
import Vue from 'vue'

console.log(mathUtils.sum(1));
console.log(mathUtils.arrMax([2,3,4]));

// setInterval(() => {
//   console.log(common.formatDate(new Date()));
// }, 1000);

require('./css/normal.css');
require('./css/special.less');

// import App from './vue/app'
import App from './vue/App.vue'

new Vue({
  el: '#app',
  // template: `<App></App>`,
  // components: {
  //   App,
  // }
  render: h => h(App)
  // render: h => h('h2',
  //   { class: 'title' },
  //   ['你好呀', h('p', { class: 'content' }), ['我是内容']])
})


/*
  runtime-compiler()
  template -> ast(抽象语法树) -> render -> v-dom -> ui

  runtime-only()  1.性能更高；2.代码量少；3.vue中的template已经由vue-template-compiler编译了
  render -> vdom ->ui

  //1.普通用法
  creatElement('标签',{标签的属性},['标签的内容'])
  //2.传入组件对象
  creatElement(App)
*/
