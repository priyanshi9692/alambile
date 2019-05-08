import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { InfoWindow, Marker } from 'google-maps-react';
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyDF1ZM-tf0X7MpSvAISIOILBYSfjThwDTw");

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
     pickupstatus: false,
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

  // createMarker(bank) {
  //   var lat1 = 0;
  //   var lng1 = 0;
  //   console.log("add",bank)
  //   // var x = Geocode.fromAddress(bank.address).then(
  //   //   response => {
  //   //     const { lat, lng } = response.results[0].geometry.location;
  //   //     lat1 = lat;
  //   //     lng1 = lng;
  //   //     console.log(lat1,lng1);
  //   //   },
  //   //   error => {
  //   //     console.error(error);
  //   //   }
  //   // );
  //   // console.log("test",lat1,lng1,"test");
  //   return (
  //     <Marker
  //       title={bank.name}
  //       name={bank.name}
  //       position={{lat: bank.lat, lng: bank.lng}} 
  //     />
  //   )
  // }

  onMarkerClickDetail(item) {
    this.setState({
      activeMarker: item
    })
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={{
         lat: 37.335647,
         lng: -121.881783
        }}
        >
        {this.state.banks.map((b) => (
          <Marker key={b.name} 
            title={b.name}
            name={b.name}
            position= {{lat: b.lat, lng: b.lng }} 
            onClick={this.onMarkerClick}
            />
        ))}
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