import React from 'react';
import './card.styles.css';

const Card = (props) => {
  //console.log(props);
  return (
    <div key={props.person.id + 100} className='card-container'>
      <img
        alt={props.person.name}
        src={`https://robohash.org/${props.person.id}?set=set4&size=100x100`}
      />
      <h4>{props.person.name}</h4>
      <p>{props.person.email}</p>
    </div>
  );
};

export default Card;
