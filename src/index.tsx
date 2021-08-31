import React from 'react'
import ReactDOM from 'react-dom'
import svgRequire from '@/utils/svgRequire'
import App from './App'
import '@/assets/style/base/index.less'

svgRequire()

if (module && module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.querySelector('#root'))
