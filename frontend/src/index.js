import React from 'react'
import ReactDOM from 'react-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import Root from './components/Root'
import getStore from './store'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Root store={ getStore() }/>,
  document.getElementById('root')
)
registerServiceWorker()
