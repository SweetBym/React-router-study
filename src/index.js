import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router , Route} from 'react-router-dom';

import Jspanga from './pages/Jspanga'
import Jspangb from './pages/Jspangb'
import Jspangc from './pages/Jspangc'
import NavBar from './pages/Nav'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( 
   <Router>
       <div>
           <NavBar />
           <Route  exact path='/' component={Jspanga}/>
           <Route  path='/Jspangb' component={Jspangb}/>
           <Route exact path='/Jspangc' component={Jspangc}/>
       </div>
   </Router>, 
   
   document.getElementById('root'));
registerServiceWorker();
