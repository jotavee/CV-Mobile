import React from 'react';

import { Container,
  TitleAbout,
  DescAbout,
  ImgAbout

} from './styles';

import imgAbout from '../../../../assets/imgs/imgAbout.jpg'

const About = () => {
  return (
      <>
        <Container>
        <TitleAbout>Quem Somos</TitleAbout>
          <DescAbout>
            O Conectando Vidas tem uma proposta, que visa incentivar a prática
            de doação de sangue pelo Brasil.          
          </DescAbout>
          <ImgAbout source={imgAbout}/>
        </Container>
      </>
  );
}

export default About;