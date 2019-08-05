import React from 'react';

//DELETAR MENSAGEM DE ERRO AMARELA
import {YellowBox} from 'react-native'; 
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

import Routes from './routes';

export default function App() {
  return <Routes />
}

