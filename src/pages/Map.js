import React, { useContext, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { SocketContext } from '../externalSocket/SocketContext';
import L from 'leaflet';
import customIconUrl from '../assets/bus.svg';
import 'leaflet/dist/leaflet.css';

const customIcon = new L.Icon({
  iconUrl: customIconUrl,
  iconSize: [31, 37],
  iconAnchor: [15, 37],
  popupAnchor: [0, -37]
});

const MyMap = ({ item }) => {
  const { route } = item;
  const [routes, setRoutes] = useState({});
  const [positions, setPositions] = useState({}); 
  const socket = useContext(SocketContext);

  useEffect(() => {

    setRoutes(route)

    if (socket) {
      socket.emit('seguirRuta', route);

      socket.on('actualizacionCoordenadas', (data) => {
        if (data.position) {
          setPositions(prevPositions => ({
            ...prevPositions,
            [data.rutaid]: data.position
          }));
        }
      });
    }

    // Cleanup function
    return () => {
      setPositions({})
      if (socket) {
        socket.off('actualizacionCoordenadas');
      }
    };
  }, [socket, route]);

  // Centro inicial del mapa
  const center = [-12.1456799, -76.981861];

  return (
    <MapContainer center={center} zoom={13} style={{ height: '90vh', zIndex: 5 }} zoomControl={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; Made By Sergitox and Luisitox'
      />
      <ZoomControl position="topright" />

      {Object.entries(positions).map(([index, pos]) => (
        <Marker key={index} position={pos} icon={customIcon}>
          <Popup>
            Ruta: {index}<br />
            Coordenadas: {pos}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MyMap;
