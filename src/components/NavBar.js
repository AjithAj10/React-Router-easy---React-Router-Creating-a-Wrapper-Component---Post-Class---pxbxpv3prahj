import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () =>{
    return(
<nav>
    <ul>
    <li className='index-link'>
        <Link to="/">index</Link>
        </li>
        <li className='home-link'>
        <Link to='/home'>
       home
        </Link>
       </li>
    </ul>
</nav>
    )
}