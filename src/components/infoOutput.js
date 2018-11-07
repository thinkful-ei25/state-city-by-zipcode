import React from 'react';

export default function InfoOutput(props) {
  let location = [];
  console.log(props);
  if(props.zipInfo[0]) {
    location = props.zipInfo[0];
  return (
    <div>
      <p>Here is the information your request on zipcode: {location.Zipcode}</p>
      <ul>
        <li> Longitude: {location.Longitude}</li>
        <li>Latitude: {location.Latitude}</li>
        <li>City: {location.City}</li>
        <li>State: {location.State}</li>
        <li>County: {location.County}</li>
      </ul>
    </div>
  )
  }

  else {
    return (
      <div>
        <p>Please enter a California Zipcode to learn more!</p>
      </div>

    )
  }
}