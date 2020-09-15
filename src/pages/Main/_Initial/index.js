import React, { useState } from 'react';
import { Linking } from 'react-native'

import { 
    Container,
    TitleMain,
    DescMain,
    ButtonNav,
    TextButton,
    ContainerButtonInitial,
    ButtonCad,
    TextButtonCad,
    ButtonLog,
    TextButtonLog,
    ImageMain,
  } from './styles';
  
 import Icon from 'react-native-vector-icons/MaterialIcons'
 import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
 import NavBar from '../../../components/NavBar';

 import imgHome from '../../../../assets/imgs/imgHome.jpg'
 import ModalRegister from '../../../components/Modals/index'


const Initial = (props) => {
  const [openModal, setopenModal] = useState(false)
  
  return (
    <>
      <NavBar />
      <Container>
          <TitleMain>Conectando Vidas</TitleMain>
          <DescMain>
            O Conectando Vidas é um app gratuito que tem como objetivo
            incentivar a doação de sangue. O serviço conecta potenciais
            doadores com os hemocentros mais próximos a ele.
          </DescMain>
          <ImageMain source={imgHome}/>
          <ContainerButtonInitial>
            {props.button}
            <ButtonCad onPress={() => Linking.openURL('http://google.com')}>
              <TextButtonCad>
                Cadastrar
              </TextButtonCad>
              <Icon2 name="account-arrow-right" size={25} color="white" />
            </ButtonCad>
          </ContainerButtonInitial>
      </Container>

      
    </>
  );
}

export default Initial;