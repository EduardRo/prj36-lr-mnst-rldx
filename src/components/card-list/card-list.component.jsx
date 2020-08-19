import React from 'react';

const CardList = (props) => {
  console.log(props.index);
  return <div>My Card: {props.name}</div>;
};

export default CardList;
