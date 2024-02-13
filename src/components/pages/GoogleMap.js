// // GoogleMap.js
// import React from "react";
// import {
//   withGoogleMap,
//   withScriptjs,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";

// const Map = () => {
//   return (
//     <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
//       <Marker position={{ lat: -34.397, lng: 150.644 }} />
//     </GoogleMap>
//   );
// };

// const WrappedMap = withScriptjs(withGoogleMap(Map));

// const GoogleMapComponent = () => {
//   return (
//     <div style={{ width: "100%", height: "400px" }}>
//       <WrappedMap
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=YOUR_GOOGLE_MAPS_API_KEY`}
//         loadingElement={<div style={{ height: "100%" }} />}
//         containerElement={<div style={{ height: "100%" }} />}
//         mapElement={<div style={{ height: "100%" }} />}
//       />
//     </div>
//   );
// };

// export default GoogleMapComponent;
