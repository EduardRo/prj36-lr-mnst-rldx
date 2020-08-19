import React from 'react';

const CardList = (props) => {
  return (
    <div key={props.index}>
      cardul meu bitches {props.name} index:{props.index}
    </div>
  );
};

export default CardList;
