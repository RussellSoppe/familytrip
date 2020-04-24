import React from 'react';

function Choices({q1, q2, q3, q4}) {
  return (
  	<div>
	    <div><a href="https://googlemaps.com">{q1}</a></div>
	    <div><a href="">{q2}</a></div>
	    <div><a href="">{q3}</a></div>
	    <div><a href="">{q4}</a></div>
    </div>
  );
}

export default Choices;