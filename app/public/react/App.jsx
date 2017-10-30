import React from 'react';
import {Header} from './Header.jsx'
import {InfoTable} from './InfoTable.jsx'

export default class App extends React.Component {
  render() {
    return (
     <div id="root">
       {<Header />}
       {<InfoTable />}
    </div>
  );
  }
}
