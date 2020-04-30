import React from 'react';
import HUD from './HUD/HUD.js';
import Travel from './Travel/Travel.js';
import Inventory from './Inventory/Inventory.js';
import Shop from './Shop/Shop.js';
import EndGame from './EndGame/EndGame.js';
// import './player.css';

// Assets


// Classes
import EndGameClass from '../../classes/EndGameClass';



class Game extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
    // Global
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
getTotalTravelDistance=()=>{
  return this.state.totaltraveldistance;
}

setTotalTravelDistance=(value)=>{
  this.setState({
    totaltraveldistance: value
  })
}

getCurrentTravelDistance=()=>{
  return this.state.currenttraveldistance;
}

setCurrentTravelDistance=(value)=>{
    this.setState({
      currenttraveldistance: value
    })
}

getCurrentEventDescription=()=>{
  return this.state.currenteventdescription;
}

setCurrentEventDescription=(string)=>{
  this.setState({
    currenteventdescription: string
  })
}

getTravelSpeed=()=>{
  return this.state.travelspeed;
}

setTravelSpeed=(value)=>{
  this.setState({
    travelspeed: value
  })
}

getChanceOfBadEvent=()=>{
  return this.state.chanceofbadevent;
}

setChanceOfBadEvent=(value)=>{
  this.setState({
    chanceofbadevent: value
  })
}



// Toggles
toggleInventoryScreen=()=>{
  
  if(this.state.toggleinventoryscreen){

    this.setState({
      toggleinventoryscreen: false
    })

  }else{
    this.setState({
      toggleinventoryscreen: true
    })
  }
  
}

toggleShopScreen=()=>{
  console.log("toggleShopScreen is here");
  if(this.state.toggleshopscreen){

    this.setState({
      toggleshopscreen: false
    })

  }else{
    this.setState({
      toggleshopscreen: true
    })
  }
  
}


toggleScreenOff=(value)=>{
  switch(value){
    case "toggleinventoryscreen":
      this.setState({
        toggleinventoryscreen: false
      });
      break;
    case "toggleshopscreen":
        this.setState({
        toggleshopscreen: false
      });
      break;
    default:
      this.setState({
        toggleinventoryscreen: false,
        toggleshopscreen: false
      });
  }
}

toggleEndGame=()=>{
  if(this.state.toggleendgame){

    this.setState({
      toggleendgame: false
    });

  }else{

    this.setState({
      toggleendgame: true
    });

  }

}

// Button Display Toggles
toggleInventoryButton=()=>{
  if(this.state.currenteventbool){

    this.setState({
      currenteventbool: false
    })

  }else{
    this.setState({
      currenteventbool: true
    })
  }
}

toggleInventoryButtonOff=()=>{
  this.setState({
    currenteventbool:false
  })
}

toggleShopButton=()=>{
  if(this.state.shopbool){

    this.setState({
      shopbool: false
    })

  }else{
    this.setState({
      shopbool: true
    })
  }
}

toggleTravelGoButton=(bool)=>{
  
  this.setState({
    travelgobuttonbool: bool
  })
}

toggleTravelGoButtonDisable=(bool)=>{
   
  this.setState({
    travelgobuttondisable: bool
  })
  
}


// Other
startNewGame=()=>{
  this.props.onPageChange("Start");
  this.setState({
    toggleendgame: false
  })
}





render(){ 
  
  return (

    <div>
      <HUD
        playername={this.props.Player.name}
        totaltraveldistance={this.state.totaltraveldistance}
        DestinationClass={this.props.DestinationClass}

        //TravelUIDistance
        destination = {this.state.destination}
        destinationdistance = {this.state.destinationdistance}
        
        getCurrentTravelDistance = {this.getCurrentTravelDistance}
        getTravelSpeed = {this.getTravelSpeed}
      />
      {<Travel
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
      />}

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
}}

export default Game;