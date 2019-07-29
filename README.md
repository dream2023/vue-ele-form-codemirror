# vue-ele-form-codemirror | vue-ele-form 的代码编辑器

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg)](https://opensource.org/licenses/mit-license.php)
[![npm](https://img.shields.io/npm/v/vue-ele-form-codemirror.svg)](https://www.npmjs.com/package/vue-ele-form-codemirror)
[![download](https://img.shields.io/npm/dw/vue-ele-form-codemirror.svg)](https://npmcharts.com/compare/vue-ele-form-codemirror?minimal=true)

## 介绍

vue-ele-form-codemirror 做为 [vue-ele-form](https://github.com/dream2023/vue-ele-form) 的第三方扩展, 通过对 [vue-codemirror](https://github.com/surmon-china/vue-codemirror) 的二次封装, 实现代码编辑器的扩展

![image](https://raw.githubusercontent.com/dream2023/images/master/vue-ele-codemirror.ep8rp5ce6q8.png)

## 安装

```bash
npm install vue-ele-form-codemirror --save
```

## 使用

```js
import EleForm from 'vue-ele-form'
import EleFormCodemirror from 'vue-ele-form-codemirror'
// 以下仅为示例, 具体根据需要, 在局部或者全局引入相应的资源
// 属性和引用资源参考: https://github.com/surmon-china/vue-codemirror
// language js
import 'codemirror/mode/javascript/javascript.js'
// theme css
import 'codemirror/theme/base16-dark.css'

// 注册 codemirror 组件
Vue.component('codemirror', EleFormCodemirror)

// 注册 vue-ele-form
Vue.use(EleForm, {
  // 可以为编辑器配置全局属性, 每个实例都共享这个属性
  codemirror: {
    options: {
      theme: 'base16-dark',
      tabSize: 4,
      mode: 'text/javascript',
      lineNumbers: true,
      line: true
    }
    // events: ['scroll', ...]
  }
})
```

```js
formDesc: {
  xxx: {
    label: 'xxx',
    type: 'codemirror', // 只需要在这里指定为 codemirror 即可
    attrs: {
      // 属性配置(会覆盖全局配置)
      options: {
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
      }
    }
  }
}
```

## 相关链接

- [vue-codemirror](https://github.com/surmon-china/vue-codemirror)
- [vue-ele-form](https://github.com/dream2023/vue-ele-form)
- [element-ui](http://element-cn.eleme.io)
