
import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar  = ()=>(
    <div>
        <div>
           <NavLink exact to='/' >Jspanga</NavLink>|&nbsp;
           <NavLink to='/Jspangb'>Jspangb</NavLink>|&nbsp;
           <NavLink to='/Jspangc' >Jspangc</NavLink>|&nbsp;
           <NavLink to='/JspangD' >404</NavLink>|&nbsp;
           
        </div>
       
    </div>
)

export default NavBar;