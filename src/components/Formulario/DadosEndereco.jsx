import React, { useState } from 'react';
import { TextField, FormGroup, Button, Grid, Box } from '@material-ui/core';

function DadosEndereco({onSubmit}){ 

  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [cep, setCep] = useState("");

  return (
    <Box justify="center" my={2}>
      <Grid item xs={10} sm={5}>
      <form onSubmit={ 
          evt => { 
              evt.preventDefault();
              evt.stopPropagation();
              onSubmit({cidade, estado, bairro, rua, numero, cep}) 
            }
          }>
          <Box mb={2}>
            <Grid sm={12} container item spacing={1}>
              <Grid xs={12} sm={6} item>
                <FormGroup>
                  <TextField label="Cidade" type="text" 
                    color="primary" value={cidade} id="cidade" variant="outlined" 
                    onChange={evt => {setCidade(evt.target.value)}} />
                </FormGroup>
              </Grid>
              <Grid xs={12} sm={6} item>
                <FormGroup>
                  <TextField label="Cep" type="text" 
                    color="primary" value={cep} id="cep" variant="outlined" 
                    onChange={evt => {setCep(evt.target.value)}} />
                </FormGroup>
              </Grid>
            </Grid>
          </Box>
          <Box mb={2}>
            <FormGroup>
              <TextField label="Estado" type="text" 
                color="primary" value={estado} id="estado" variant="outlined" 
                onChange={evt => {setEstado(evt.target.value)}} />
            </FormGroup>
          </Box>
          <Box mb={2}>
            <FormGroup>
              <TextField label="Bairro" type="text" 
                color="primary" value={bairro} id="bairro" variant="outlined" 
                onChange={evt => {setBairro(evt.target.value)}} />
            </FormGroup>
          </Box>
          <Box mb={2}>
          </Box>
          <Box mb={2}>
            <Grid sm={12} container item spacing={1}>
              <Grid xs={12} sm={6} item>
                <FormGroup>
                  <TextField label="Rua" type="text" 
                    color="primary" value={rua} id="rua" variant="outlined" 
                    onChange={evt => {setRua(evt.target.value)}} />
                </FormGroup>
              </Grid>
              <Grid xs={12} sm={6} item>
                <FormGroup>
                  <TextField label="Número" type="number" 
                    color="primary" value={numero} id="numero" variant="outlined" 
                    onChange={evt => {setNumero(evt.target.value)}} />
                </FormGroup>
              </Grid>
            </Grid>
          </Box>
          <Box align="right">
            <Button type="submit" variant="contained" color="primary">Continuar</Button>
          </Box>
        </form>
      </Grid>
    </Box>
  );
}

export default DadosEndereco;