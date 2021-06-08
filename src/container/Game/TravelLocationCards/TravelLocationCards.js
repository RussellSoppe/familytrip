import React, {useState} from 'react';
import './TravelLocationCards.css';

function TravelLocationCards({DestinationClass, destinations}) {

	const [cardoverlay, setCardOverlay] = useState(true);
	const [cardchoice, setCardChoice] = useState([]);

	let destinationarray = Object.entries(destinations);
	
	const onCardChoice=(object, id)=>{
	  setCardOverlay(false);
	  setCardChoice([object.id]);
	  
	  // Quick fix that will only allow for start of game mechanics
	  if(object.id[1]==='home'){
	  	onGameStart(object);
	  }else{
			onNextDestination(object);
	  }
	}

	const onGameStart=(object)=>{
		DestinationClass.setStartLocation(object);
	  DestinationClass.setCurrentLocation(object);
	  DestinationClass.setDestination(object.next_leg[0]);
	}

	const onNextDestination=(object)=>{
		DestinationClass.setCurrentLocation(DestinationClass.getDestination());
		DestinationClass.setDestination(object);
	}

	const destinationcards = destinationarray.map((array, index)=>{
		
		console.log(array);

		let choicecheck = cardchoice[0] === array[1].id;
	
		
		if(array[1].next_leg[0] === "finished"){

      return(
        <div key={index}>End Of Trip!!!</div>
			);

		}else if(Number.isInteger(array[1].id[0])){
			//previous check was for Number.isInteger(array[1].id[0])

			return(
				
					<div key={index} className="travel-location-card-inner-wrapper" >
		
						{/*Card Invisible Buttonlike Overlay*/}
						<div className="travel-location-card-cover-wrapper"
							onClick={()=>{onCardChoice(array[1])}}
							style={cardoverlay ? {display:"block"} : {display:"none"}}
						>
						</div>

						{/*Card Color Transparent Overlay*/}
						<div 
							className={!choicecheck ? "travel-card-null-overlay" : "travel-card-selected-overlay"} 
							style={cardoverlay ? {display:"none"} : {display:"block"}}
						>
						</div>

						<img src={array[1].imgurl} alt="Vista of location."></img>
						<h2>{array[1].name}</h2>
						{
							<h4>Current Travel Distance: {DestinationClass.getDistanceBetween('home', array[1].id)}</h4>
						}
					</div>
			);

		}else{
			return(
				<div key={index}>
				  <div style={{display:'none'}}></div>
        </div>
			);
		}
	})


	return(
		<div className="travel-location-card-outer-wrapper">
			{destinationcards}
		</div>
	);

}

export default TravelLocationCards;