import React,  { useState, useEffect }  from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, ActivityIndicator } from 'react-native'
import { Container, TitleMain } from './styles';

// Simulando um banco de dados MongoDB
const teste = [
  {
    id: 1,
    name: "Banco de sangue Paulista",
    desc: "Este é o banco de sangue paulista",
    lat: -23.65569,
    long: -46.705491,
  },
  {
    id: 2,
    name: "Parque Ibirapuera",
    desc: "Este é o parque ibirapuera",
    lat: -23.58326,
    long: -46.664434,
  },
  {
    id: 3,
    name: "Sala São Paulo",
    desc: "Este é a sala são paulo",
    lat: -23.533978,
    long: -46.639758,
  },
  {
    id: 4,
    name: "Masp",
    desc: "Este é o museu do masp",
    lat: -23.561198,
    long: -46.655893,
  },
  {
    id: 5,
    name: "Teatro Alfa",
    desc: "Este é o teatro alfa",
    lat: -23.651041,
    long: -46.721002,
  },
  {
    id: 6,
    name: "Senai Ary Torres",
    desc: "Este é o senai ary torres",
    lat: -23.651983,
    long: -46.712676,
  },
];


// Posição inicial do usuário
// latitudeDelta e longitudeDelta: referentes ao zoom
const initialPosition = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.0042,
  longitudeDelta: 0.0031
}

const Locals = () => {
  const [currentPosition, setCurrentPosition] = useState(initialPosition)

  // Pegando a localização do usuário
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      setCurrentPosition({
        ...currentPosition,
        latitude,
        longitude
      })
    })
  }, [])

  // Funcão para gerar os marcadores no mapa
  const renderMarker = () => {
    return teste.map((item) => (
      <Marker
      key={item.id}
        coordinate={{
          latitude: item.lat,
          longitude: item.long,
        }}
        title={item.name}
        description={item.desc}
      />
    ));
  }
  return (
    <>
      <Container>
        {currentPosition.latitude ? (
          <MapView
            style={styles.mapStyle}
            initialRegion={currentPosition}
            showsPointsOfInterest={false}
            showsBuildings={false}
            showsUserLocation
          >
            { renderMarker() }
          </MapView>
        ) : (
          <ActivityIndicator style={{ flex: 1 }} animating size="large" />
        )}
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
})

export default Locals;
