import React from 'react'
import {
  PorqueContainer,
  TextContainer,
  TextHeader,
  ImageContainer,
} from './PorqueStyled'
import Amigos from './amigos'

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
  )
}

export default Porque
