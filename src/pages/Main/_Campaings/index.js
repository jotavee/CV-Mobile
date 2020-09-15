import React from 'react';

import { 
  styles,
  Container,
  TitleCamps,
  DescCamps
 } from './styles';

 import { FlatList, View, Image, Text, StyleSheet } from 'react-native'

 const teste = [
   {
     id: 1,
     img:
       "https://images.pexels.com/photos/3791664/pexels-photo-3791664.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
     title: "Nome da campanha1",
     desc: "Lorem Ipsum é simplesmente uma simulação de texto da ",
   },
   {
     id: 2,
     img:
       "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
     title: "Nome da campanha2",
     desc:
       "Lorem Ipsum é simplesmente uma simulação de texto da ",
   },
   {
     id: 3,
     img:
       "https://images.pexels.com/photos/3823489/pexels-photo-3823489.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
     title: "Nome da campanha3",
     desc:
       "Lorem Ipsum é simplesmente uma simulação de texto da ",
   },
   {
     id: 4,
     img:
       "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
     title: "Nome da campanha3",
     desc:
       "Lorem Ipsum é simplesmente uma simulação de texto da ",
   },
 ];


function _Campaigns() {

  function ListRender (props) {
    return(
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: props.img }}/>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.desc}>{props.desc}</Text>
      </View>
    )
  }

  return (
      <>
        <Container>
            <TitleCamps>Campanhas</TitleCamps>
            <DescCamps>
              Com a sua ajuda podemos conectar ainda mais vidas por meio de
              campanhas. Veja as disponíveis abaixo e ajude-nos a incentivar a
              doação de sangue
            </DescCamps>

            <FlatList 
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={teste}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ListRender 
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                />
              )}
            />
        </Container>
      </>
  );
}

export default _Campaigns;
