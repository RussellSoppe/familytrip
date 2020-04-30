import React from 'react';
import './EndGame.css';


class EndGame extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      
    }
  }

render(){ 
  
  return (

    <div id="endgame" style={this.props.toggleendgamestate ? {display:"inline"} : {display:"none"}}>
      <div className="endgame-inner-container">
        <h1>Game Over</h1>
        <div>
            <button onClick={()=>this.props.startNewGame()}>Start New Game</button>
        </div>
      </div>
    </div>
  );
}}

export default EndGame;