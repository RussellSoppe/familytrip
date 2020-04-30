import React from 'react';
import './Travel.css';

//Components
import TravelUI from './TravelUI/TravelUI.js';

// Containers

// Classes


// assets

import badevents from '../../../gamedata/badevents.js';

class Travel extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      distancebetween: this.props.DestinationClass.getDistanceBetween(this.props.DestinationClass.getCurrentLocation().id, this.props.DestinationClass.getCurrentDestination().id)
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
  let currentlocationkey = this.props.DestinationClass.getCurrentLocation();
  let destinationkey = this.props.DestinationClass.getCurrentDestination();

  let travel = setInterval(()=>{

    if(!this.destinationArrivalCheck()){

      this.travelOneLeg(currentlocationkey.id, destinationkey.id);

      if(badevent){

        this.setBadTravelEvent();
        
        //allow an inventory check
        this.props.toggleInventoryButton();

        // pause travel until player resumes
        this.props.toggleTravelGoButtonDisable(false);
        clearInterval(travel);
      }

      
      badevent = this.checkForBadTravelEvent(this.props.getChanceOfBadEvent());

      // check for arrival
      if(this.destinationArrivalCheck(`Player has arrived at ${this.props.DestinationClass.getCurrentDestination().name}!`)){
        clearInterval(travel);
      }

      // check for endgame
      let endmessage = this.checkForEndGame();

      if(this.props.toggleendgamestate){
        this.props.setCurrentEventDescription(endmessage);
        clearInterval(travel);
      }

    }else{
      // Set Player Arrived
      this.destinationArrivalCheck();
      clearInterval(travel);
    }

  }, 1000);

}

travelOneLeg=(currentlocationkey, destinationkey)=>{
  // progress player at travel speed and distance
 
  let distancetodestination = this.props.DestinationClass.getDistanceBetween(currentlocationkey, destinationkey);
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

rollForEvent=()=>{
  let roll = Math.floor(Math.random() * 101);
  return roll;
}

checkForBadTravelEvent=(percent=20)=>{
  let roll = this.rollForEvent();
  let rollcheck = roll <= percent;
  
  if(rollcheck){
    return true;
  }
}

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

checkForEndGame = ()=>{

  let endgamecheckobject = this.props.EndGameClass.checkForEndGame(this.props.PlayerInventory);

  if(endgamecheckobject.bool === true){

    this.props.toggleEndGame();
    return(endgamecheckobject.message);
  }

}


render(){ 

  return (

    <div>

      {/*<h5>Current Travel Distance: {this.props.getCurrentTravelDistance()}</h5>                    
      <h5>Travel Speed: {this.props.getTravelSpeed()}</h5>        
      <h5>Chance of Bad Event: {this.props.getChanceOfBadEvent()} </h5>                            
      <h5>Total Travel Distance: {this.props.getTotalTravelDistance()}</h5>
      <h5>Current Event Description: {this.props.getCurrentEventDescription()}</h5>
      <h5></h5>
      <button onClick={()=>this.travelGo()}>Travel Now</button>
      <h5></h5>*/}

     
      <TravelUI 
        // Current Event
        getCurrentEventDescription = {this.props.getCurrentEventDescription}

        /* Progress Bar */
        getCurrentTravelDistance = {this.props.getCurrentTravelDistance}
        DestinationClass = {this.props.DestinationClass}
        distancebetween = {this.state.distancebetween}
        
        /* Buttons */
        travelGo = {this.travelGo}

        // toggle methods/functions
        toggleScreenOff = {this.props.toggleScreenOff}
        toggleShopScreen = {this.props.toggleShopScreen}
        toggleInventoryScreen = {this.props.toggleInventoryScreen}
        toggleEndGame = {this.props.toggleEndGame}

        // toggle state
        toggleendgamestate={this.props.toggleendgame}

        // bools
        travelgobuttonbool = {this.props.travelgobuttonbool}
        currenteventbool = {this.props.currenteventbool}
        destinationbool = {this.props.destinationbool}
        shopbool = {this.props.shopbool}

        //Used to disable travel button while traveling
        travelgobuttondisable = {this.props.travelgobuttondisable}
      />

    </div>

  );
}}

export default Travel;
