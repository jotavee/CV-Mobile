import React from 'react';
import Initial from './_Initial';
import Campaings from './_Campaings';
import Institutions from './_Institutions';
import About from './_About';
import Footer from '../../components/Footer'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'
import ModalRegister from '../../components/Modals/index'
import Icon from 'react-native-vector-icons/AntDesign'

const Main = () => {
  const [openModal, setopenModal] = React.useState(false)

  return (
      <>
        <ScrollView>
          <Initial button={
            <ButtonLog onPress={() => setopenModal(true)}>
              <TextButtonLog>Acessar</TextButtonLog>
            </ButtonLog>
          }/>
          <Campaings />
          <Institutions />
          <About />
          <Footer />
        </ScrollView>

        {openModal ? 
          <ModalRegister 
            buttonCloseModal={
              <ButtonNav onPress={() => setopenModal(false)}>
                <TextButton><Icon name="close" size={30} color="black" /></TextButton>
              </ButtonNav>}
            /> 
        : null}
      </>
  );
}

const ButtonLog = styled.TouchableOpacity`
  width: 100px;
  margin: 0 10px;
  border-width: 1px;
  border-color: #000;
  border-radius: 25px;
`
const TextButtonLog = styled.Text`
  font-size: 14px;
  text-align: center;
  padding: 10px;
  font-family: Roboto;
  font-weight: bold;
`

const ButtonNav = styled.TouchableOpacity``
const TextButton = styled.Text``

export default Main;