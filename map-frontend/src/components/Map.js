import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { InfoWindow, Marker } from 'google-maps-react';
import Geocode from "react-geocode";

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
    state = {
     showingInfoWindow: false,  //Hides or the shows the infoWindow
     activeMarker: {},          //Shows the active marker upon click
     selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
     banks: this.props.banks,
   };

   onMarkerClick = (props, marker, e) =>
   this.setState({
     selectedPlace: props,
     activeMarker: marker,
     showingInfoWindow: true
   });

 onClose = props => {
   if (this.state.showingInfoWindow) {
     this.setState({
       showingInfoWindow: false,
       activeMarker: null
     });
   }
 };

  createMarker(bank) {
    let lat1;
    let lng1;
    Geocode.fromAddress(bank.address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        lat1 = lat;
        lng1 = lng;
      },
      error => {
        console.error(error);
      }
    );
    console.log("test",lat1,lng1,"test");
    return (
      <div>
      <Marker
        title={bank.name}
        name={bank.name}
        position={{lat: lat1, lng: lng1}} />
      <Marker />
      </div>
    )
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{
         lat: 37.335647,
         lng: -121.881783
        }}
        >
        <Marker
          onClick={this.onMarkerClick}
          name={'Kenyatta International Convention Centre'}
        />
        {this.state.banks.map((b) => {
          this.createMarker(b);
        })}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDF1ZM-tf0X7MpSvAISIOILBYSfjThwDTw'
})(MapContainer);