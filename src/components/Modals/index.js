// Modal de navbar

import React from 'react';
import { Scroll } from 'react-native'

import {
  Container,
  Containerform,
  TitleModalLog,
  DescModalLog,
  InputModalLog,
  ImageModalLog,
  ModalTop,
  ButtonForgot,
  TextButtonForgot,
  ButtonAcess,
  TextButtonAcess,
   } from './styles';

import Icon from 'react-native-vector-icons/AntDesign'
import imglogin from '../../../assets/imgs/img-modal-login.png'
import imglogingif from '../../../assets/imgs/imgForgot.gif'

const ModalRegister= (props) => {
  const [modalForgot, setModalForgot] = React.useState(true)

  const handleModalForgot = () => setModalForgot(false)
  const handleModalLogin = () => setModalForgot(true)
  return (
      <>
        <Container>
            <ModalTop>{props.buttonCloseModal}</ModalTop>
            {modalForgot ? (
              <Containerform>
                <TitleModalLog>Acessar</TitleModalLog>
                <DescModalLog>Bem vindo de volta</DescModalLog>
                <InputModalLog placeholder="E-mail" placeholderTextColor="#000"/>
                <InputModalLog secureTextEntry={true} textContentType={'password'} placeholder="Senha" placeholderTextColor="#000"/>
                <ButtonForgot onPress={handleModalForgot}>
                  <TextButtonForgot>Esqueci Minha Senha</TextButtonForgot>
                </ButtonForgot>
                <ButtonAcess>
                  <TextButtonAcess>Acessar</TextButtonAcess>
                  <Icon name="user" size={20} color="white"/>
                </ButtonAcess>
              </Containerform>
            ): (
              <Containerform>
                <TitleModalLog>Alterar Senha</TitleModalLog>
                <DescModalLog>Esqueceu sua senha ? sem problemas, digite uma nova</DescModalLog>
                <InputModalLog placeholder="Digite seu E-mail" placeholderTextColor="#000"/>
                <InputModalLog secureTextEntry={true} textContentType={'password'} placeholder="Digite uma nova senha" placeholderTextColor="#000"/>
                <InputModalLog secureTextEntry={true} textContentType={'password'} placeholder="Confirme sua nova senha" placeholderTextColor="#000"/>
                <ButtonForgot onPress={handleModalLogin}>
                  <TextButtonForgot>Voltar para login</TextButtonForgot>
                </ButtonForgot>
                <ButtonAcess>
                  <TextButtonAcess>Acessar</TextButtonAcess>
                </ButtonAcess>
              </Containerform>
            )}
        </Container>
      </>
  );
}

export default ModalRegister;