import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cabecalho from './componentes/cabecalho/Cabecalho';

ReactDOM.render(
  <React.StrictMode>
    <Cabecalho />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);