import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {ShopProvider} from './context'
ReactDom.render(
<ShopProvider>
        <App />

</ShopProvider>
 
,
document.getElementById('root'))
