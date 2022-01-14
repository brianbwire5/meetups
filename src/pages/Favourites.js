import React from 'react'
import MeetupList from '../components/meetups/MeetupList';
import { useContext } from 'react';
import FavouritesContext from '../store/favourites-context';

function Favourites() {
    const favouritesCtx = useContext(FavouritesContext);

    let content;

    if(favouritesCtx.totalFavourites === 0) {
        content = <p>You got no favourites yet.Start adding some?</p>
    } else {
        content =  <MeetupList meetups={favouritesCtx.favourites} />;
    }

    return (
        <section>
          <h1>My Favourites</h1>
           {content}
        </section>
    );
}

export default Favourites;
