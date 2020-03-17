import React from 'react';

const AdditionalFeature = props => {
  console.log(props);
  return (
    <li>
      <button onClick={props.buyItem(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
