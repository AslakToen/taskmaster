import React from 'react';
import {Header} from './Header.jsx';
import {MainContent} from './MainContent.jsx';
import {SideBar} from './SideBar.jsx';

export default class App extends React.Component {
  render() {
    return (
     <div id="root" class="wrapper">
       {<Header />}
       {<SideBar />}
    </div>
  );
  }
}
