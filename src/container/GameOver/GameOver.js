import React from 'react';
import './GameOver.css';


class GameOver extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      playername: this.props.username
    }
  }




render(){ 
  return (

    <div>
      GameOver container
    </div>
  );
}}

export default GameOver;
