import React from 'react'
import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetup() {
    const history = useHistory();
   function addMeetupHandler(meetUpData) {
       fetch('https://react-getting-started-d9d3a-default-rtdb.firebaseio.com/meetups.json',
       {
         method:'POST',
         body: JSON.stringify(meetUpData),
         headers: {
             'Content-Type': 'application/json'
         }
       }
       
    ).then(() => {
      history.replace('/');
    });
   }

   //by default fetch sends a get request, we want to send a post request

  return (
      <section>
    <h1>Add New Meetup</h1>
     <NewMeetupForm onAddMeetup={addMeetupHandler}/>
      </section>
  )
}

export default NewMeetup;
