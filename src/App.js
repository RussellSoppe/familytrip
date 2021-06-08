import React from 'react';
import './App.css';

// Components
import Header from './components/Header/header.js';

// Containers
import StartScreen from './container/StartScreen/StartScreen.js';
import Game from './container/Game/Game.js';
import GameOver from './container/GameOver/GameOver.js';

import InventoryClass from './classes/InventoryClass';
import DestinationClass from './classes/DestinationClass';

// assets
import travelwest from './gamedata/travelwest';

class App extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      // Global
      currentpage: "Start",
      playername: "",
      Player: {
        name: "John Doe",
        inventory: new InventoryClass(1, 25, 3, 500),
        classtype: {}
      },
      DestinationClass: new DestinationClass(travelwest, travelwest.startinglocations),
      

      // Start Screen

      // Game
      
      // // HUD

      // // Travel

      // // Inventory

      // Game Over


    }
  }

  onPageChange=(value)=>{
    this.setState({
      currentpage: value
    })
  }

  createPlayer=(name, inventory, classtype)=>{
    this.setState({
      Player: {
        name: name,
        inventory: inventory,
        classtype: classtype, 
        status: {
          travelspeed: 5
        }
      }
    })

  }


  render(){ 
    
    if(this.state.currentpage === "Start"){

      return(
        <div>
          <Header/>
          <StartScreen
            onPageChange = {this.onPageChange}
            createPlayer = {this.createPlayer}
            DestinationClass = {this.state.DestinationClass}
          />
        </div> 
      );

    }else if(this.state.currentpage === "Game"){

      return(
        <div> 
          <Header/>
          <Game
            onPageChange = {this.onPageChange} 
            Player = {this.state.Player}
            DestinationClass = {this.state.DestinationClass}
          />
        </div>
      );

    }else if(this.state.currentpage === "GameOver"){

      return(
        <div>
          <Header/>
          <GameOver/>
        </div>
      );
    }

    

  }
}

export default App;
