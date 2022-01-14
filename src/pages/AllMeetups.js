import React from 'react'
import { useState, useEffect} from 'react';

import MeetupList from '../components/meetups/MeetupList';

//useEffect allows you to run some code under certain conditions
function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-getting-started-d9d3a-default-rtdb.firebaseio.com/meetups.json'//since fetch returns a promise we use .then function to execute
  ).then(response => {
      return response.json();
  }).then(data => {
    const meetups = [];

    for(const key in data) {
      const meetup = {
          id: key,
          ...data[key]
      };

      meetups.push(meetup);
    }

    setIsLoading(false);
    setLoadedMeetups(meetups);
  });
  }, []); //we use empty array since we have no external dependencies ie props

  
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
    return (
        <section>
           <h1>All Meetups Page</h1>
           <MeetupList meetups ={loadedMeetups}/>
        </section>
    )
}

export default AllMeetups;
