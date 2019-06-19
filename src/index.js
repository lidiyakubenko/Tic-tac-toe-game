import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import  configureStore from './redux/store'
import {Provider} from 'react-redux'
import './styles.css'

const store = configureStore()

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
document.getElementById('root')
)