import './App.css';
import Formulario from './components/Formulario/Formulario';
import {Typography, Box, Container} from '@material-ui/core';

function App() {
  return (
    <Container component="article">
      <Box align="center" mt={3}>
        <Typography variant="h5" component="h2">Cadastro de Pessoas</Typography>
          <Formulario onSubmit={onSubmit} />
      </Box> 
    </Container>
  );
}

function onSubmit(data){
  console.log(data)
}

export default App;
