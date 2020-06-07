import React from 'react';
import styled from 'styled-components';
import Amigos from './amigos';

const Porque = () => {
  return (
    <PorqueContainer>
      <TextContainer>
        <TextHeader>Apoyo psicológico que se adapta a ti</TextHeader>
        <p>
          En vital Mind somos un equipo de
          <br />
          psicólogos capacitados y certificados, <br /> en donde ofrecemos apoyo{' '}
          <br />
          personalizado a las mujeres que día <br />
          a día se enfrenta a distintas limitantes <br />
          que nos les permiten ser su mejor versión.
        </p>
      </TextContainer>
      <ImageContainer>
        <Amigos />
      </ImageContainer>
    </PorqueContainer>
  );
};

const PorqueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 400px;
`;

const TextContainer = styled.div`
  width: 500px;
`;

const TextHeader = styled.h2`
  max-width: 260px;
  font-weight: bold;
`;

const ImageContainer = styled.div`
  width: 500px;
  margin-right: 6rem;
`;

export default Porque;
