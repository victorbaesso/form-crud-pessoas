import React, { useState, useContext } from 'react';
import { TextField, FormGroup, Button, Switch, FormControlLabel, Grid, Box } from '@material-ui/core';
import Validacoes from '../../contexts/Validacoes';
import useErros from '../../hooks/useErros';


function DadosPessoais({onSubmit}){ 

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
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
                onSubmit({nome, cpf, promocoes, novidades}) 
              }
            }
          }>
          <Box mb={2}>
            <FormGroup>
              <TextField label="Nome" type="text" required={true} name="nome"
                onBlur={validarCampos} error={!erros.nome.valido} helperText={erros.nome.helper} 
                color="primary" value={nome} id="nome" variant="outlined" 
                onChange={evt => {setNome(evt.target.value)}} />
            </FormGroup>
          </Box>
          <Box mb={2}>
            <FormGroup>
              <TextField label="Cpf" type="text" required={true} name="cpf"
                onBlur={validarCampos} error={!erros.cpf.valido} helperText={erros.cpf.helper} 
                color="primary" value={cpf}  id="cpf" variant="outlined" 
                onChange={evt => {setCpf(evt.target.value)}} />
            </FormGroup>
          </Box>
          <Box mb={2}>
            <FormGroup>
              <Grid container>
                <Grid item xs={6} align="center">
                  <FormControlLabel control={<Switch checked={promocoes} onChange={evt => {setPromocoes(evt.target.checked)}} />} label="Promoções" />
                </Grid>
                <Grid item xs={6} align="center">
                  <FormControlLabel control={<Switch checked={novidades} onChange={evt => {setNovidades(evt.target.checked)}} />} label="Novidades" />
                </Grid>
              </Grid>
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

export default DadosPessoais;