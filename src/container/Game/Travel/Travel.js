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
      // UI Toggles 
      inventorybuttontoggle: false,
      newtravelbutton: false,
      showdestinationpicture: false,
      travelbutton: true,
      travelbuttondisable: false,
      
      // current event description
      currentevent: "",

      // redo how these get used
      destinationurl: this.props.DestinationClass.getCurrentDestination().imgurl,
      nextlocation: this.props.DestinationClass.getNextDestination().name,
      destination: this.props.DestinationClass.getCurrentDestination().name,
      destinationdistance: this.props.DestinationClass.getCurrentDestination().distance,






      // Global
      chanceofbadevent: 20,
      showdestinationpicture: false,
   

      // NavButtons
      // currentevent:"",
      destintatonlocation: 0,
     
      // nextlocation: destinations[1].name,
    
   
      
      // Distance
      traveldistance: 0,
      // travelspeed 70 = 10, 50 = 8, 30 = 5
      travelspeed: 10, 
    }
  }

travelGo=()=>{
  // reset current event description and travel button
  this.setState({
      currentevent: "",
      travelbuttondisable: true
  })
  // reset inventory button to not showing
  if(this.state.inventorybuttontoggle === true){
      this.setState({
        inventorybuttontoggle: false
    })
    // this.props.toggleScreenOff();
  }
  
  this.travelLoop();  
}

// loops through travel functions to progress player, cause travel event or arrive at destination
travelLoop=()=>{
  let continuetravel = true;
  let badevent = false;

  let travel = setInterval(()=>{

    if(continuetravel){

      this.travelOneLeg();

      if(badevent){
        this.setBadTravelEvent();
        continuetravel = false;
      }

      this.checkForEndGame();

      if(this.props.toggleendgamestate){
        clearInterval(travel);
      }
    
    }else{
      // this.destinationArrival();

      // Set Player Arrived
      console.log("Player Arrived");
      clearInterval();
    }

    badevent = this.checkForBadTravelEvent(this.state.chanceofbadevent);
    

  }, 1000);

}

travelOneLeg=()=>{
  // progress player at travel speed and distance

 
    if(this.state.traveldistance < this.state.destinationdistance){
      
      this.setState({
        traveldistance: this.state.traveldistance + this.state.travelspeed
      })

      // Use Gas
      this.props.PlayerInventory.setMyGas(-.5);

      // set total travel distance state in Game.js
      this.props.setTotalTravelDistance(this.props.getTotalTravelDistance() + this.state.travelspeed)
    }
    // checks for destination arrival, if arrived then triggers arrival states
    this.destinationArrival();
  
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
          
    this.setState({
      travelbuttondisable: false, 
      inventorybuttontoggle: true,
      currentevent: badevent.description
    })
      
    this.props.PlayerInventory.updateInventory(badevent.inventorycat, badevent.cost);

}

//travel destination sets the current location
destinationArrival=()=>{

    
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
      <TravelUI

      // TravelUi
      toggleInventoryScreen = {this.props.toggleInventoryScreen}
      
      // Nav Buttons
      currentevent = {this.state.currentevent} 
      destintatonlocation = {this.state.destintatonlocation}
      inventorybuttontoggle={this.state.inventorybuttontoggle}
      newtravelbutton = {this.state.newtravelbutton}
      nextlocation = {this.state.nextlocation} 
      toggleShopScreen={this.props.toggleShopScreen}
      travelbutton= {this.state.travelbutton}
      travelbuttondisable = {this.state.travelbuttondisable} 
      travelGo = {this.travelGo} 
      startNewDestination = {this.startNewDestination} 
       
      // Distance
      destination = {this.state.destination}
      destinationdistance = {this.state.destinationdistance}
     

      DestinationClass = {this.props.DestinationClass}
      traveldistance = {this.state.traveldistance}
      travelspeed = {this.state.travelspeed}
      showdestinationpicture={this.state.showdestinationpicture}
      destinationurl={this.state.destinationurl}

      // StatusBar
      //destinationdistance = {this.state.destinationdistance}
      //traveldistance = {this.state.traveldistance} 

      />
    </div>

  );
}}

export default Travel;
