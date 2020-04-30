import React, {useState} from 'react';
import './TravelLocationCards.css';

function TravelLocationCards({DestinationClass}) {

	const [cardoverlay, setCardOverlay] = useState(true);

	let destinationarray = Object.entries(DestinationClass.getDestinations());
	
	const onDestinationChoice=(key)=>{

	  setCardOverlay(false);

	  DestinationClass.setCurrentDestination(key);
	  DestinationClass.addDestinationToTrackingArray(key);
	}


	const destinationcards = destinationarray.map((value, index)=>{

		let choicecheck = DestinationClass.checkDestinationTrackingArray(value[1].id);
	

		if(Number.isInteger(value[1].id)){

			return(
				
					<div key={index} className="travel-location-card-inner-wrapper" >
		
						{/*Card Invisible Buttonlike Overlay*/}
						<div className="travel-location-card-cover-wrapper"
						onClick={()=>{
							onDestinationChoice(value[1].id);
						}}
						style={!cardoverlay ? {display:"none"} : {display:"block"}}
						></div>

						{/*Card Color Transparent Overlay*/}
						<div 
							className={!choicecheck ? "travel-card-null-overlay" : "travel-card-selected-overlay"} 
							style={cardoverlay ? {display:"none"} : {display:"block"}}
						>
						</div>

						<img src={value[1].imgurl} alt="Vista of location."></img>
						<h2>{value[1].name}</h2>
						<h4>Current Travel Distance: {DestinationClass.getDistanceBetween('home', value[1].id)}</h4>
					</div>
			);

		}else{
			return(<div key={index} style={{display:'none'}}></div>);
		}
	})


	return(
		<div className="travel-location-card-outer-wrapper">
			{destinationcards}
		</div>
	);

}

export default TravelLocationCards;