import React from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';

const CardList = (props) => {
  return (
    <div className='card-list'>
      {props.monsters.map((person) => {
        return <Card key={person.id} person={person} />;
      })}
    </div>
  );
};

export default CardList;
