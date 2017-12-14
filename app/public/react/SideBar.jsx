import React from 'react';
import {InfoTable} from './InfoTable.jsx';
import {TicTacToe} from './TicTacToe.jsx';

export class SideBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render(){
    return(
      <div id="root">
        <div id="SideBarDiv" class="two">
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>  
        </div>
        {this.state.isToggleOn ? <InfoTable /> : <TicTacToe />}
      </div>
    )
  }
}
