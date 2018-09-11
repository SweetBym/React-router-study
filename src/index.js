import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router , Route, Switch, Redirect} from 'react-router-dom';

import Jspanga from './pages/Jspanga'
import Jspangb from './pages/Jspangb'
import Jspangc from './pages/Jspangc'
import NavBar from './pages/Nav'
import Error from './pages/Error'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( 
   <Router>
       <div>
           <NavBar />
           <Switch>
              <Route  exact path='/' component={Jspanga}/>
              <Route  path='/Jspangb' component={Jspangb}/>
              <Route exact path='/Jspangc' component={Jspangc}/>
              <Route  component ={Error} />
           </Switch>
          
       </div>
   </Router>, 
   
   document.getElementById('root'));
registerServiceWorker();
