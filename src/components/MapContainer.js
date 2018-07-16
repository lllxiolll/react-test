import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBgKNsorbH8sQMY1ino6gwbWXyaHUaP8wE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap 
  defaultZoom={8} 
  defaultCenter={{ lat: 40.7127837, lng: -74.0059413 }}
  >
    {props.isMarkerShown && (
      <Marker 
      position={
        { 
          lat: 40.7127837, 
          lng: -74.0059413 
        }} 
      onClick={
        props.onMarkerClick
      } />
    )}
  </GoogleMap>
));



export default MyMapComponent;