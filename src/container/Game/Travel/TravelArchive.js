import React from 'react';
import './Travel.css';

import badevents from '../../../gamedata/badevents.js';

class Travel extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      distancebetween: 100
    }
  }

travelGo=()=>{
  // reset current event description and toggle off buttons as needed button
  this.props.setCurrentEventDescription('');
  this.props.toggleInventoryButtonOff();
  this.props.toggleTravelGoButtonDisable(true);

  this.travelLoop();  
}

// loops through travel functions to progress player, cause travel event or arrive at destination
travelLoop=()=>{
  let badevent = false;
  let currentlocation = this.props.DestinationClass.getCurrentLocation();
  let destination = this.props.DestinationClass.getDestination();

  let travel = setInterval(()=>{

    // Check if arrived, if not proceed
    if(!this.destinationArrivalCheck()){

      // Travel One leg
      this.travelOneLeg(currentlocation, destination);
  
      // Check for bad event
      if(badevent){
        
        // If badevent set bad event
        this.setBadTravelEvent();
        
        //allow an inventory check
        this.props.toggleInventoryButton();

        // pause travel until player resumes
        this.props.toggleTravelGoButtonDisable(false);

        // clear Interval
        clearInterval(travel);
      }

      // create possible bad event
      badevent = this.checkForBadTravelEvent(this.props.getChanceOfBadEvent());

      // check for arrival
      if(this.destinationArrivalCheck(`Player has arrived at ${this.props.DestinationClass.getDestination().name}!`)){
        // clearinterval
        clearInterval(travel);
      }

      // set endgame bool
      let endmessage = this.checkForEndGame();

      // check endgame bool
      if(this.props.toggleendgamestate){
        // set endgame message
        this.props.setCurrentEventDescription(endmessage);
        // clearinterval
        clearInterval(travel);
      }

    }else{
      // Set Player Arrived
      this.destinationArrivalCheck();
      // clear interval
      clearInterval(travel);
    }

  }, 1000);

}


travelOneLeg=(currentlocation, destination)=>{
  
  let distancetodestination = this.props.DestinationClass.getDistanceBetween(currentlocation, destination);
  let currentdistance = this.props.getCurrentTravelDistance();

    // Check distance to destination
    if(currentdistance < distancetodestination){
      
      // update travel to destination distance
      this.props.setCurrentTravelDistance(this.props.getCurrentTravelDistance() + this.props.getTravelSpeed());

      // Use Gas
      this.props.PlayerInventory.setMyGas(-.5);

      // set total travel distance state in Game.js
      this.props.setTotalTravelDistance(this.props.getTotalTravelDistance() + this.props.getTravelSpeed());
    }
  
}

// rollForEvent=()=>{
//   let roll = Math.floor(Math.random() * 101);
//   return roll;
// }

// checkForBadTravelEvent=(percent=20)=>{
//   let roll = this.rollForEvent();
//   let rollcheck = roll <= percent;
  
//   if(rollcheck){
//     return true;
//   }
// }

setBadTravelEvent=()=>{
  // reset at later point to turn badeventcase into a random choice based on length of array/object to ensure always works with object as is intead of hard code - see https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
    let badeventcase = function (obj) {
      var keys = Object.keys(obj);
      let randomkey = Math.floor(Math.random() * keys.length);
      return randomkey;
    };

    let badevent = badevents[badeventcase(badevents)];
          
    this.props.setCurrentEventDescription(badevent.description);
    // console.log("Travel: setBadTravelEvent: badevent.description", badevent.description);
      
    this.props.PlayerInventory.updateInventory(badevent.inventorycat, badevent.cost);
}

// Check For arrival to current destination
destinationArrivalCheck=(string)=>{

  if(this.props.getCurrentTravelDistance() >= this.state.distancebetween){
    this.props.setCurrentEventDescription(string);
    this.props.toggleShopButton(true);
    this.props.toggleInventoryButton(true);
    this.props.toggleTravelGoButton(false);
    this.props.toggleTravelGoButtonDisable(false);
    return true;
  }else{
    return false;
  }

}

startNewDestination=(i)=>{
 
  this.props.DestinationClass.setCurrentLocation(i + 1);
  this.props.DestinationClass.setNextLocation(i + 2);

  console.log(this.props.DestinationClass.getCurrentLocation());
  // Rebuild using DestinationClass from Game.js
}

//  Relocated to TravelEventClass

// checkForEndGame = ()=>{

//   let endgamecheckobject = this.props.EndGameClass.checkForEndGame(this.props.PlayerInventory);

//   if(endgamecheckobject.bool === true){

//     this.props.toggleEndGame();
//     return(endgamecheckobject.message);
//   }

// }


render(){ 

  return (

    <div>



    </div>

  );
}}

export default Travel;
