import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from "leaflet";


import socketIOClient from "socket.io-client";

class Mapa extends Component {
  constructor() {
    super();
    this.state = {
        response: 0,
        endpoint: "wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl/flights"
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const {endpoint} = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FLIGHTS", (data) => {
      this.setState({response: data});
    }
  )}

  render() {
    const {response} = this.state;
    return (
      <div>
        <MapContainer center={[45.4, -75.7]} zoom={1.5}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        </MapContainer>
      </div>
    );
  }
}
 
export default Mapa;