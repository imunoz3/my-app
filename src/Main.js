import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Mapa from "./Mapa";
import FlightInfo from "./FlightInfo";
import Chat from "./Chat";
 
class Main extends Component {
  render() {
    return (
    <HashRouter>
        <div>
          <h1>FLIGHTS</h1>
          <ul className="header">
            <li><NavLink exact to="/">Mapa</NavLink></li>
            <li><NavLink to="/flight_info">Flight Info</NavLink></li>
            <li><NavLink to="/chat">Chat</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Mapa}/>
            <Route path="/flight_info" component={FlightInfo}/>
            <Route path="/chat" component={Chat}/>
          </div>
        </div>
    </HashRouter>
    );
  }
}
 
export default Main;