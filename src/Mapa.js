import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker} from 'react-leaflet'
import PropTypes from 'prop-types'
import L from 'leaflet';

import io from "socket.io-client";
const limeOptions = { color: 'lime' }
const duckIcon = new L.Icon({
  iconUrl: 'https://i.ya-webdesign.com/images/sample-png-image-download-3.png',
  iconRetinaUrl: 'https://i.ya-webdesign.com/images/sample-png-image-download-3.png',
  iconAnchor: new L.Point(0, 0),
  popupAnchor: new L.Point(16, 0),
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(32, 32),
  className: 'leaflet-div-icon'
});

class Mapa extends Component {
  state = {
    flights: [],
    positions:[]
  }

  ws = io('wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl', {path: "/flights"});

  componentDidMount() {
    this.ws.on("FLIGHTS", (data) => {
      this.setState({
        flights: data
      });
    });

    this.ws.on("POSITION", (data) => {
      const elementsIndex = this.state.positions.findIndex(element => element.code == data.code )
      if (elementsIndex == -1)
      {
        this.setState({
          positions: [...this.state.positions, data]
          });
      }
      else
      {
        let newArray = [...this.state.positions]
        newArray[elementsIndex] = {...newArray[elementsIndex], position: data.position}
        this.setState({
          positions: newArray,
          });
      }
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
      <p>Los markers azules son orígenes, los círculos azules son destinos y los patitos son aviones en movimiento.</p>
      <button onClick ={this.emitFlights()}> Show Flights </button>
      <div>
        <MapContainer center={[45.4, -75.7]} zoom={1.5}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      {this.state.flights.map(flight => (
        <div>
        <Marker position={[flight.origin[0], flight.origin[1]]}> 
         <Popup>Origen:{flight.code}</Popup>
        </Marker>
        <CircleMarker center={[flight.destination[0], flight.destination[1]]}> 
        <Popup>Destino:{flight.code}</Popup>
        </CircleMarker>
        <Polyline pathOptions={limeOptions} positions={[[flight.origin[0], flight.origin[1]], [flight.destination[0], flight.destination[1]]]} />
        </div>
      ))}
      {this.state.positions.map(plane => (
        <div>
        <Marker position={[plane.position[0], plane.position[1]]} icon={duckIcon}> 
        <Popup>Avión:{plane.code}</Popup>
        </Marker>
        </div>
      ))}

        </MapContainer>
      </div>
    </div>
    );
  }
}
 
export default Mapa;