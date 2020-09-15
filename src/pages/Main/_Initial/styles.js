import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 40%;
`;

export const TitleMain = styled.Text`
  font-size: 30px;
  font-family: "Alata";
  font-weight: bold;
  margin-bottom: 10px; 
`;

export const DescMain = styled.Text`
  font-size: 16px;
  font-family: "Alata";
  text-align: center;
  max-width: 350px;
`;

export const TextButtonMain = styled.Text`
  font-size: 16px;
  font-family: "Alata";
  text-align: center;
  color: #fff;
  padding: 7px 25px;
`;

export const ImageMain = styled.Image`
    width: 300px;
    height: 300px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const ContainerButtonInitial = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

`;

export const ButtonNav = styled.TouchableOpacity``;

export const ButtonCad = styled.TouchableOpacity`
  width: 140px;
  margin: 0 10px;
  flex-direction: row;
  background: #E26868;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;
export const TextButtonCad = styled.Text`
  font-size: 14px;
  text-align: center;
  padding: 10px;
  color: #fff;
  font-family: Alata;
  font-weight: bold;
`;
export const ButtonLog = styled.TouchableOpacity`
  width: 100px;
  margin: 0 10px;
  border-width: 1px;
  border-color: #000;
  border-radius: 25px;
`;
export const TextButtonLog = styled.Text`
  font-size: 14px;
  text-align: center;
  padding: 10px;
  font-family: Roboto;
  font-weight: bold;
`;

export const TextButton = styled.Text`
  font-family: "Cookie";
  font-size: 13px;
`;
