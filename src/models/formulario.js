function validaCpf(cpf){
  if(cpf.length !== 11){
    return {valido: false, helper: "CPF deve ter 11 digitos"}
  } else{
    return {valido: true, helper: ""}
  }
}

function validaNome(nome){
  if(nome.length <= 3){
    return {valido: false, helper: "Nome deve ter mais que 3 caracteres"}
  } else{
    return {valido: true, helper: ""}
  }
}

function validaCelular(celular){
  if(celular.length !== 11){
    return {valido: false, helper: "Celular deve ter 11 digitos numéricos (DDD + Numero)"}
  } else{
    return {valido: true, helper: ""}
  }
}

function validaSenha(senha){
  if(senha.length < 4 ){
    return {valido: false, helper: "A senha deve ter no minimo 4 caracteres"}
  } else{
    return {valido: true, helper: ""}
  }
}

function validaLogin(login){
  if(login.length <= 3){
    return {valido: false, helper: "Login deve ter mais que 3 caracteres"}
  } else{
    return {valido: true, helper: ""}
  }
}


export {validaCpf, validaNome, validaCelular, validaSenha, validaLogin};