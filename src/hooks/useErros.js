import {useState} from 'react';

function useErros(validacoes){
  const estadoInicial = setEstadoInicial(validacoes);
  const [erros, setErros] = useState(estadoInicial);

  
  function validarCampos(evt){
    const {name, value} = evt.target; 
    const newState = {...erros};
    newState[name] = validacoes[name](value);
    setErros(newState);
  }

  function canGo(){
    let canGo = true;
    console.log(erros);
    for (let e in erros) { 
      canGo = canGo && erros[e].valido;
    };
    return canGo;
  }
  
  return [erros, validarCampos, canGo];
}

function setEstadoInicial(validacoes){
  const estadoInicial = {};
  for (let e in validacoes) { 
    estadoInicial[e] = { valido: true, helper: ""};
  }
  return estadoInicial;
}

export default useErros;