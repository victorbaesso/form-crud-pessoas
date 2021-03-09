import React, { useState, useContext } from 'react';
import { TextField, FormGroup, Button, Grid, Box } from '@material-ui/core';
import Validacoes from '../../contexts/Validacoes';
import useErros from '../../hooks/useErros';

function DadosContato({onSubmit}){ 

  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const validacoes = useContext(Validacoes);
  const [erros, validarCampos, canGo] = useErros(validacoes);

  return (
    <Box justify="center" my={2}>
      <Grid item xs={10} sm={5}>
      <form onSubmit={ 
          evt => { 
              evt.preventDefault();
              evt.stopPropagation();
              if(canGo()){
                onSubmit({email, celular});
              }
            }
          }>
          <Box mb={2}>
            <FormGroup>
              <TextField label="E-mail" type="email" required={true}
                color="primary" value={email} id="email" variant="outlined" 
                onChange={evt => {setEmail(evt.target.value)}} />
            </FormGroup>
          </Box>
          <Box mb={2}>
            <FormGroup>
              <TextField label="Celular" type="text" name="celular"
                onBlur={validarCampos} error={!erros.celular.valido} helperText={erros.celular.helper} 
                color="primary" value={celular} id="celular" variant="outlined" 
                onChange={evt => {setCelular(evt.target.value)}} />
            </FormGroup>
          </Box>
          <Box align="right">
            <Button type="submit" variant="contained" color="primary">Continuar</Button>
          </Box>
        </form>
      </Grid>
    </Box>
  );
}

export default DadosContato;