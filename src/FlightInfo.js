import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, l} from 'react-leaflet'
import { Icon } from "leaflet";
import PropTypes from 'prop-types'


import io from "socket.io-client";
const limeOptions = { color: 'lime' }

class FlightInfo extends Component {
  state = {
    flights: []
  }

  ws = io('wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl', {path: "/flights"});

  componentDidMount() {
    this.ws.on("FLIGHTS", (data) => {
      this.setState({
        flights: data
      });
    });
  }

  emitFlights () {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    this.ws.emit("FLIGHTS", {})
  }

  render() {
    const {response} = this.state;
    return (
    <div>
      <button onClick ={this.emitFlights()}> Show Flights </button>
      <div>
      {this.state.flights.map(flight => (
        <p>
          Vuelo: {flight.code} 
          <div>
            Aerolínea: {flight.airline} 
          </div>
          <div>
            Avión: {flight.plane} 
          </div>
          <div>
            Asientos: {flight.seats} 
          </div>
          <div>
            Pasajeros: 
            {
              flight.passengers.map(passenger => (
                <div>
                 {passenger.name}, {passenger.age}
                </div>
              ))
            } 
          </div>
        </p>
      ))}
      </div>
    </div>
    );
  }
}
 
export default FlightInfo;