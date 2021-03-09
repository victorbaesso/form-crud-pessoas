import React, { useState, useContext } from 'react';
import { TextField, FormGroup, Button, Grid, Box } from '@material-ui/core';
import Validacoes from '../../contexts/Validacoes';
import useErros from '../../hooks/useErros';

function DadosLogin({onSubmit}){ 

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
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
                onSubmit({login, senha}) 
              }
            }
          }>
          <Box mb={2}>
            <FormGroup>
              <TextField label="Login" type="text" required={true} name="login"
                onBlur={validarCampos} error={!erros.login.valido} helperText={erros.login.helper} 
                color="primary" value={login} id="login" variant="outlined" 
                onChange={evt => {setLogin(evt.target.value)}} />
            </FormGroup>
          </Box>
          <Box mb={2}>
            <FormGroup>
              <TextField label="Senha" type="password" required={true} name="senha"
                onBlur={validarCampos} error={!erros.senha.valido} helperText={erros.senha.helper} 
                color="primary" value={senha} id="senha" variant="outlined" 
                onChange={evt => {setSenha(evt.target.value)}} />
            </FormGroup>
          </Box>
          <Box align="right">
            <Button type="submit" variant="contained" color="primary">Finalizar</Button>
          </Box>
        </form>
      </Grid>
    </Box>
  );
}

export default DadosLogin;