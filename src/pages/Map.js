import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import io from 'socket.io-client';
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
  const [positions, setPositions] = useState({}); // Estado para almacenar las posiciones de varios buses
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:1234');
    setSocket(newSocket);

    // Enviar las rutas a seguir
    newSocket.emit('seguirRuta', route);

    // Escuchar actualizaciones para cada ruta
    newSocket.on('actualizacionCoordenadas', (data) => {
      if (data.position) {
        setPositions(prevPositions => ({
          ...prevPositions,
          [data.rutaid]: data.position
        }));
      }
    });

    // Desconectar cuando el componente se desmonte
    return () => {
      setPositions({});
      newSocket.disconnect();
    }
  }, [route]);

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
