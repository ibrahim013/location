import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapComponent.css";

/*this block of code is to solve the known issue when displaying a marker 
  https://github.com/Leaflet/Leaflet/issues/4968
*/
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

const MAP_TILE_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const MAP_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const MapComponent = ({ lat, lng }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    //initializing leaflet
    mapRef.current = L.map("map", {
      center: [0, 0],
      zoom: 2,
      layers: [
        L.tileLayer(MAP_TILE_URL, {
          attribution: MAP_ATTRIBUTION,
          maxZoom: 18,
          tileSize: 512,
          zoomOffset: -1
        })
      ]
    });
  }, []);

  //add marker
  const markerRef = useRef(null);
  useEffect(() => {
    markerRef.current
      ? markerRef.current.setLatLng({ lat, lng })
      : (markerRef.current = L.marker({ lat, lng }).addTo(mapRef.current));
  }, [lat, lng]);

  return <div id="map" className="map-wrapper"></div>;
};

MapComponent.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
};
export default MapComponent;
