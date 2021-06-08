import React from 'react';
import CurrentLocation from './CurrentLocation/CurrentLocation.js';
import HUD from './HUD/HUD.js';
import Travel from './Travel/Travel.js';
import Inventory from './Inventory/Inventory.js';
import Shop from './Shop/Shop.js';
import EndGame from './EndGame/EndGame.js';
// import './player.css';

// Assets


// Classes
import EndGameClass from '../../classes/EndGameClass';
import PlayerTravelClass from '../../classes/PlayerTravelClass';



class Game extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
    PlayerTravelClass: new PlayerTravelClass(this.props.DestinationClass),

    // Global
    screen: "currentlocation",
    totaltraveldistance: 0,
    
    // Game
    currenteventdescription: "",

    // Bools used for UI buttons, false === display: none
    travelgobuttonbool: true,
    currenteventbool: false,
    destinationbool: false,
    shopbool: false,

    //Used to disable travel button while traveling
    travelgobuttondisable: false,
    
    // // HUD

    // // Travel
    chanceofbadevent: 20,
    currenttraveldistance: 0,
    travelspeed: 10, 

    
    // // Inventory
    toggleinventoryscreen: false,

    // // Shop
    toggleshopscreen: false, 

    // // EndGame
    EndGameClass: new EndGameClass(),
    toggleendgame: false,

    }
  }

// Getters and Setters
// getTotalTravelDistance=()=>{
//   return this.state.totaltraveldistance;
// }

// setTotalTravelDistance=(value)=>{
//   this.setState({
//     totaltraveldistance: value
//   })
// }

// getCurrentTravelDistance=()=>{
//   return this.state.currenttraveldistance;
// }

// setCurrentTravelDistance=(value)=>{
//     this.setState({
//       currenttraveldistance: value
//     })
// }

// getCurrentEventDescription=()=>{
//   return this.state.currenteventdescription;
// }

// setCurrentEventDescription=(string)=>{
//   this.setState({
//     currenteventdescription: string
//   })
// }

// getTravelSpeed=()=>{
//   return this.state.travelspeed;
// }

// setTravelSpeed=(value)=>{
//   this.setState({
//     travelspeed: value
//   })
// }

// getChanceOfBadEvent=()=>{
//   return this.state.chanceofbadevent;
// }

// setChanceOfBadEvent=(value)=>{
//   this.setState({
//     chanceofbadevent: value
//   })
// }



// Toggles

toggleGameScreen=(screen)=>{
  this.setState({
    screen: screen
  })
}

// toggleInventoryScreen=()=>{
  
//   if(this.state.toggleinventoryscreen){

//     this.setState({
//       toggleinventoryscreen: false
//     })

//   }else{
//     this.setState({
//       toggleinventoryscreen: true
//     })
//   }
  
// }

// toggleShopScreen=()=>{
//   console.log("toggleShopScreen is here");
//   if(this.state.toggleshopscreen){

//     this.setState({
//       toggleshopscreen: false
//     })

//   }else{
//     this.setState({
//       toggleshopscreen: true
//     })
//   }
  
// }


// toggleScreenOff=(value)=>{
//   switch(value){
//     case "toggleinventoryscreen":
//       this.setState({
//         toggleinventoryscreen: false
//       });
//       break;
//     case "toggleshopscreen":
//         this.setState({
//         toggleshopscreen: false
//       });
//       break;
//     default:
//       this.setState({
//         toggleinventoryscreen: false,
//         toggleshopscreen: false
//       });
//   }
// }

// toggleEndGame=()=>{
//   if(this.state.toggleendgame){

//     this.setState({
//       toggleendgame: false
//     });

//   }else{

//     this.setState({
//       toggleendgame: true
//     });

//   }

// }

// Button Display Toggles
// toggleInventoryButton=()=>{
//   if(this.state.currenteventbool){

//     this.setState({
//       currenteventbool: false
//     })

//   }else{
//     this.setState({
//       currenteventbool: true
//     })
//   }
// }

// toggleInventoryButtonOff=()=>{
//   this.setState({
//     currenteventbool:false
//   })
// }

// toggleShopButton=()=>{
//   if(this.state.shopbool){

//     this.setState({
//       shopbool: false
//     })

//   }else{
//     this.setState({
//       shopbool: true
//     })
//   }
// }

// toggleTravelGoButton=(bool)=>{
  
//   this.setState({
//     travelgobuttonbool: bool
//   })
// }

// toggleTravelGoButtonDisable=(bool)=>{
   
//   this.setState({
//     travelgobuttondisable: bool
//   })
  
// }


// Other
// startNewGame=()=>{
//   this.props.onPageChange("Start");
//   this.setState({
//     toggleendgame: false
//   })
// }





render(){ 

  switch(this.state.screen){
    case "currentlocation":
      return(
        <div>
        
          <HUD
            Player={this.props.Player}
            DestinationClass={this.props.DestinationClass}

            totaltraveldistance={this.state.totaltraveldistance}

            //TravelUIDistance
            destination = {this.state.destination}
            destinationdistance = {this.state.destinationdistance}
              
            getCurrentTravelDistance = {this.getCurrentTravelDistance}
      
          />

          <CurrentLocation
            DestinationClass = {this.props.DestinationClass}
            Player = {this.props.Player}
          />
          <button onClick={()=>this.toggleGameScreen('travel')}>Travel</button>
        </div>
      );
    case "travel":
      return (
        <div>
          <HUD
            Player={this.props.Player}
            totaltraveldistance={this.state.totaltraveldistance}
            DestinationClass={this.props.DestinationClass}

            //TravelUIDistance
            destination = {this.state.destination}
            destinationdistance = {this.state.destinationdistance}
            
            getCurrentTravelDistance = {this.getCurrentTravelDistance}
          />
          <div>
              <div>Location: {this.props.DestinationClass.getCurrentLocation().name}</div>
              <div>Destination: {this.props.DestinationClass.getDestination().name}</div>
              <div>Distance from 
                  {this.props.DestinationClass.getCurrentLocation().name} to 
                  {this.props.DestinationClass.getDestination().name} =  
                  {this.props.DestinationClass.getDistanceBetween(this.props.DestinationClass.getCurrentLocation(), this.props.DestinationClass.getDestination())}
              </div>
              <div>Distance Left to Destination: {this.state.PlayerTravelClass.getDistanceToDestination()}</div>
              <div>Total Distance Traveled: {this.state.PlayerTravelClass.getPlayerLocation()}</div>
              <div><button onClick={()=>this.state.PlayerTravelClass.travelOneLeg()}>Travel One Leg</button></div>
              <div>{}</div>
              <div>{}</div>
              <div>{}</div>
              <div>{}</div>
              <div>{}</div>
              <div>{}</div>
              <div>{}</div>
              <div>{}</div> 


          </div>

          {/*<Travel
            getCurrentTravelDistance = {this.getCurrentTravelDistance}
            getTravelSpeed = {this.getTravelSpeed}
            getChanceOfBadEvent = {this.getChanceOfBadEvent}
            getCurrentEventDescription = {this.getCurrentEventDescription}
            getTotalTravelDistance={this.getTotalTravelDistance}

            setCurrentTravelDistance = {this.setCurrentTravelDistance}
            setCurrentEventDescription={this.setCurrentEventDescription}
            setTotalTravelDistance={this.setTotalTravelDistance}

            DestinationClass = {this.props.DestinationClass}
            EndGameClass={this.state.EndGameClass}
            
            PlayerInventory={this.props.Player.inventory}

            toggleScreenOff={this.toggleScreenOff}
            toggleShopScreen={this.toggleShopScreen}
            toggleInventoryScreen={this.toggleInventoryScreen}
            toggleEndGame={this.toggleEndGame}

            toggleendgamestate={this.state.toggleendgame}
        
            // toggles for buttons to display
            toggleInventoryButton = {this.toggleInventoryButton}
            toggleInventoryButtonOff = {this.toggleInventoryButtonOff}
            toggleShopButton = {this.toggleShopButton}

            // bools for buttons
            travelgobuttonbool = {this.state.travelgobuttonbool}
            currenteventbool = {this.state.currenteventbool}
            destinationbool = {this.state.destinationbool}
            shopbool = {this.state.shopbool}

            //Used to disable travel button while traveling
            toggleTravelGoButton = {this.toggleTravelGoButton}
            toggleTravelGoButtonDisable = {this.toggleTravelGoButtonDisable}
            travelgobuttondisable = {this.state.travelgobuttondisable}
          />*/}

          <Inventory
            PlayerInventory={this.props.Player.inventory}
            // temp inventory toggle system
            toggleinventoryscreenstate = {this.state.toggleinventoryscreen}
            toggleInventoryScreen={this.toggleInventoryScreen}
            toggleScreenOff={this.toggleScreenOff}
          />
          <Shop
            toggleshopscreen = {this.state.toggleshopscreen}
            toggleScreenOff={this.toggleScreenOff}
            PlayerInventory={this.props.Player.inventory}
          /> 
          <EndGame
            toggleendgamestate = {this.state.toggleendgame}
            startNewGame = {this.startNewGame}
          />
        </div>
      );
    default: 
      return(
        <div>Something went wrong, start new game.</div>
      );
  }
  
}}

export default Game;