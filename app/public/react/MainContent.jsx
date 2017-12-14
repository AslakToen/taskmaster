import React from 'react';
import {InfoTable} from './InfoTable.jsx'
import {TicTacToe} from './TicTacToe.jsx'

export class MainContent extends React.Component{
  constructor(props){
    super(props);

    this.state = {id: 'taskTableDiv',
                  content: ''};
  }

  render(){
    return(
      <div id={this.state.id} class="three">
        {this.state.content}
      </div>
    )
  }
}
