import React from 'react';
import {validaCpf, validaNome, validaCelular, validaSenha, validaLogin} from '../models/formulario.js'

const Validacoes = React.createContext(
  {cpf: validaCpf, nome: validaNome, celular: validaCelular, senha: validaSenha, login: validaLogin}
);

export default Validacoes;