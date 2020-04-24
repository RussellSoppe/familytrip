import React from 'react';
import './player.css';

class Player extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      playername: "",
      start: !true
      
    }
  }

onPlayerChooseName(event){
  this.setState({
    playername: event.target.value
  });

}

onStart(){

  if(this.state.start === !true)
  this.setState({
    start: true,
  });

}

render(){ 

  return (
    <div>
      <div className="playerui" style={this.state.start ? {display: "flex"} : {display: "none"}}>
        <h2>Player Name: {this.state.playername}</h2>
        <h2>Total Distance Traveled: {this.props.totaltraveldistance}</h2>
      </div>

      <div className="player-start-ui">
        <div 
          className="player-name-modal" 
          style={this.state.start ? {display: "none"} : {display: "flex"}}
        >
          <h2>Player Name: 
            <input 
              className="player-name-input" 
              type="text" 
              onChange={(event)=>this.onPlayerChooseName(event)}
            />
          </h2>
          <button className="start-button" onClick={()=>{
            this.onStart();
            this.props.onPageChange("Game");
          }}>Start</button>
        </div>
      </div>
    </div>
  );
}}

export default Player;
