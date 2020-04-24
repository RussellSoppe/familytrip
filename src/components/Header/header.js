import React from 'react';
import './header.css';
// images
import headerimg from '../../images/logo.jpg';

function Header() {

		

  return (
  	<div className="header">
	  	<div className="headerimgcontainer">
	  		<img src={headerimg} alt='Family in car traveling down road.'/>
	  	</div>
	  	<div className="headertitletext">
	  		Family Road Trip
	  	</div>
    </div>
  );
}

export default Header;