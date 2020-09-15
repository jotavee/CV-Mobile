import styled from 'styled-components/native';
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: 180,
    backgroundColor: "#EBEBEB",
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 30,
    marginHorizontal: 13,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 13
    },
    shadowOpacity: 0.58,
    elevation: 10
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 14,
    textAlign: "left",
    marginTop: 20
  },
  desc: {
    fontFamily: "Alata",
    fontSize: 11,
    textAlign: "left",
    marginTop: 10,
    marginBottom: 10
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 50,
    opacity: 0.8,
    marginHorizontal: 5
  }
})

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  background: #FAFAFA;
`;

export const TitleCamps = styled.Text`
  font-family: Alata;
  font-size: 30px;
`;

export const DescCamps = styled.Text`
  font-family: Alata;
  font-size: 16px;
  text-align: center;
  max-width: 350px;
  margin: 10px 0;
  padding-bottom: 5%;
`;
