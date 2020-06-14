import React from 'react';
import styled from 'styled-components';
import Amigos from './amigos';
import Shape from './shape';

const Home = () => {
  return (
    <>
      <HomeContainer>
        <TextContainer>
          <TextHeader>Apoyo psicológico que se adapta a ti</TextHeader>
          <p>
            En vital Mind somos un equipo de
            <br />
            psicólogos capacitados y certificados, <br /> en donde ofrecemos
            apoyo <br />
            personalizado a las mujeres que día <br />
            a día se enfrenta a distintas limitantes <br />
            que nos les permiten ser su mejor versión.
          </p>
        </TextContainer>
        <ImageContainer>
          <Amigos />
        </ImageContainer>
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 500px;
`;

const TextContainer = styled.div``;

const TextHeader = styled.h2`
  font-weight: bold;
`;

const ImageContainer = styled.div`
  min-width: 600px;
  height: auto;
`;

const ShapeContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  z-index: -1;
`;

export default Home;
