import React from 'react';
/*import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

//class Map extends React.Component {
  const MyMapComponent = compose(
    withProps(
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyBgKNsorbH8sQMY1ino6gwbWXyaHUaP8wE&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />    
    }),
    withScriptjs,
    withGoogleMap
  )(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      )}
    </GoogleMap>
  ));
    */

   import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

   export class MapContainer extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
    
      onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };

     render() {
       return (
         <Map google={this.props.google} zoom={14}>
   
           <Marker onClick={this.onMarkerClick}
                   name={'Current location'} />
   
           <InfoWindow
           onOpen={this.windowHasOpened}
           onClose={this.onInfoWindowClose}>
               <div>
                 <h1>{this.state.selectedPlace.name}</h1>
               </div>
           </InfoWindow>
         </Map>
       );
     }
   }
   
   export default GoogleApiWrapper({
     apiKey: ("AIzaSyBgKNsorbH8sQMY1ino6gwbWXyaHUaP8wE")
   })(MapContainer)