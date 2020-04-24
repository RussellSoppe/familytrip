import React from 'react';
import './Inventory.css';


class Inventory extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      
    }
  }




render(){ 
  return (

    <div id="inventory" style={this.props.toggleinventoryscreenstate ? {display:"inline"} : {display:"none"}}>
      <div className="inventory-inner-container">
          Gas: {this.props.PlayerInventory.getMyGas()}<br/>
          Food: {this.props.PlayerInventory.getMyFood()}<br/>
          Barf Bags: {this.props.PlayerInventory.getMyBarfBags()}<br/>
          Money: {this.props.PlayerInventory.getMyMoney()}<br/>
          <button onClick={()=>this.props.toggleScreenOff()}>Back</button>
      </div>
    </div>

  );
}}

export default Inventory;
