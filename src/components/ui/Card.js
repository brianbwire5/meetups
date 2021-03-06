import React from 'react'
import classes from './Card.module.css';
import MeetupItem from '../meetups/MeetupItem';


function Card(props) {
  return <div className={classes.card}>{props.children}</div>; 
}

export default Card;
