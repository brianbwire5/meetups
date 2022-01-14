import React from 'react'
import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
      event.preventDefault();
      //get the entered value in title

      const enteredTitle = titleInputRef.current.value;
      const enteredImage = imageInputRef.current.value;
      const enteredAddress = addressInputRef.current.value;
      const enteredDescription = descriptionInputRef.current.value;

      //create a new meetup object with the captured values from the form

      const meetUpData = {
          title:enteredTitle,
          image:enteredImage,
          address: enteredAddress,
          description: enteredDescription,
      };

      props.onAddMeetup(meetUpData);


    }
    return <Card>
    <form className={classes.form} onSubmit={submitHandler}>
       <div className={classes.control}>
         <label htmlFor='title'>Meetup Title</label>
         <input type='text' required id='title' ref={titleInputRef}/>
       </div>
       <div className={classes.control}>
         <label htmlFor='image'>Meetup Image</label>
         <input type='url' required id='image' ref={imageInputRef} />
       </div>
       <div className={classes.control}>
         <label htmlFor='address'>Address</label>
         <input type='text' required id='address' ref={addressInputRef} />
       </div>
       <div className={classes.control}>
       <label htmlFor='description'>Description</label>
       <textarea required id='description' required rows='5' ref={descriptionInputRef} ></textarea> 
     </div>
      <div className={classes.actions}>
      <button>Add Meetup</button>
      </div>
    </form>
    </Card>
}

export default NewMeetupForm;
