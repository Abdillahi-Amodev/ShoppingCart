import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
function App() {
   

    return (
       <Router>
           <Switch>

            <Route exact path='/'>
                <Home/>
            </Route>
            <Route exact path='/cart'>
                <Cart/>
            </Route>
           </Switch>

       </Router>
    )
}

export default App
