import React from 'react'
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import FavouritesContext from '../../store/favourites-context';


function MainNavigation() {
   const favouritesCtx = useContext(FavouritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>REACT MEETUPS</div>
      <nav>
        <ul>
          <li>
          <Link to ='/'>All Meetups</Link>
            </li> 
          <li>
          <Link to ='/new-meeting'>Add New Meetup</Link>
           </li>
          <li>
          <Link to ='/favourites'>
          My favourites
          <span className={classes.badge}>{favouritesCtx.totalFavourites}</span>
          </Link>
         </li>
         </ul>
        
      </nav>
    </header>
  )
}

export default MainNavigation;
