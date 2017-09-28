import React from 'react'

export default class Fetch extends React.Component{
  constructor(){
    super();
    this.state = {
      text: []
    }
  }

  componentTaskInfo() {
    fetch('http://localhost:3000/api/nodefetch')
    .then(results => {
      return results.json();
    }).then(data => {
      let info = text.results;
      return(
        <div>{text.results}</div>
      )
    })
    this.setState(text: info)
    console.log("state", this.state.text);
  }

  render(){
    return(
      <div>
        {this.state.text}
      </div>
    )
  }
}
