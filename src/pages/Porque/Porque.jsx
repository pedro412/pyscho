import React from 'react';
import styled from 'styled-components';
import Tablets from './tablets';

const Porque = () => {
  return (
    <div>
      <Container>
        <Text>
          <h2>Psicólogos profesionales apalancados por tecnología.</h2>
          <p>
            Ofrecemos un programa de tratamiento integral que combiana
            técnología con asesoria profesional. Te damos acceso a un lugar para
            crear conexiones y una comunidad segura y sin prejuicios que
            promueve el intercambio de experiencias e ideas, empatía,
            comprensión y la esperanza de construir la vida que deseas vivir.
          </p>
        </Text>
        <ImgContainer>
          <Tablets />
        </ImgContainer>
      </Container>
      <ImagesContainer>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </ImagesContainer>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImgContainer = styled.div`
  min-width: 600px;
  width: 100%;
`;

const ImagesContainer = styled.div`
  min-height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Text = styled.div`
  h2 {
    color: #4b0ccf;
  }
`;

export default Porque;
