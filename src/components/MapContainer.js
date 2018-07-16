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

   import React from 'react';
   import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
   
   
   const GettingStartedGoogleMap = withGoogleMap(props => (
     <GoogleMap
       ref={props.onMapLoad}
       defaultZoom={3}
       defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
       onClick={props.onMapClick}
     >
       {props.markers.map((marker, index) => (
         <Marker
           {...marker}
           onRightClick={() => props.onMarkerRightClick(index)}
         />
       ))}
     </GoogleMap>
   ));
   
   
class MapGoogle extends React.PureComponent { 
     constructor() {
       super();
       this.saveButtonPressed = this.saveCheckin.bind(this);
     }

     componentDidMount() {
       console.log("component is mounted");
       
     }
   
    render() {   
       const marginStyle = {
         margin: '60px 20px 10px 20px',
       };
   
       const mySettingsBtn = {
         marginTop: '10px',
       };
     return (
         <div className="row" style={marginStyle}>
           <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 col-lg-offset-2 col-md-offset-2 col-sm-offset-2">
             <h2>Check in</h2>
             <a href="/checkinhistory">View Checkin History</a><br/>
             <br/>
   
   
   
               <GettingStartedGoogleMap
                containerElement={
                   <div style={{ height: `100%` }} />
              }
              mapElement={
                <div style={{ height: `100%` }} />
              }
             /* onMapLoad={_.noop}
              onMapClick={_.noop}
              markers={markers}
              onMarkerRightClick={_.noop}*/
             />
   
   
   
             <form>
               <div class="form-group">
                 <input type="text" className="form-control" name="fname" placeholder="Add note here"/>
               </div>
             </form> <br/>
             <button className="btn btn-lg btn-info btn-block" style={mySettingsBtn} onClick={this.saveButtonPressed}>Check In</button>
           </div>
         </div>
       );
    }
  }
  export default MapGoogle;