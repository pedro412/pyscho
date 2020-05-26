import React from 'react'
import { FormGroup, Label, FormControl } from './FormStyled'

const Form = () => {
  return (
    <>
      <h2>Form Test</h2>
      <form>
        <FormGroup>
          <Label>Nombre</Label>
          <FormControl type="text" />
        </FormGroup>
        <FormGroup>
          <Label>Correo electrónico</Label>
          <FormControl type="text" />
        </FormGroup>
        <button type="button">Enviar</button>
      </form>
    </>
  )
}

export default Form
