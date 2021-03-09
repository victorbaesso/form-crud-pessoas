import { Container, Stepper, Step, StepLabel, Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import DadosContato from './DadosContato';
import DadosEndereco from './DadosEndereco';
import DadosLogin from './DadosLogin';
import DadosPessoais from './DadosPessoais';

function Formulario({onSubmit}){ 
  const [ etapaAtual, setEtapaAtual ] = useState(0);
  const [ data, setDados ] = useState({});

  const formularios = [
        <DadosPessoais onSubmit={coletaDados} />,
        <DadosContato onSubmit={coletaDados} />,
        <DadosEndereco onSubmit={coletaDados} />,
        <DadosLogin onSubmit={coletaDados} />,
        <Alert variant="filled" severity="success">
          Parabéns, você se cadastrou com sucesso
        </Alert>
      ]

  useEffect(()=>{
    if(etapaAtual === formularios.length){
      onSubmit(data);
    }
  });

  function proximo(){
    setEtapaAtual(etapaAtual + 1);
  }
  
  function coletaDados(dados){
    setDados({...data, ...dados});
    proximo();
  }

  return (
    <Container >
      <Grid item xs={12} sm={8}>
        <Stepper activeStep={etapaAtual} >
          <Step><StepLabel>Pessoais</StepLabel></Step>
          <Step><StepLabel>Contato</StepLabel></Step>
          <Step><StepLabel>Endereço</StepLabel></Step>
          <Step><StepLabel>Login</StepLabel></Step>
          <Step><StepLabel>Conclusão</StepLabel></Step>
        </Stepper>
      </Grid>
      { formularios[etapaAtual] }
    </Container>
  );
}

export default Formulario;