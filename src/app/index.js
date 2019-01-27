import * as React from 'react'
import { Switch, NavLink,Route,BrowserRouter } from 'react-router-dom'
import Home from './views/home'


const App = () => <BrowserRouter><div>Hello
  <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
<Switch>
  <Route path="/home" component={Home} />
  <Route render={() => <div>coomon</div>}/>
</Switch></div></BrowserRouter>


export default App
