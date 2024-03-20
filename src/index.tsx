import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Formulario from './componentes/formulario/Formulario';
import Cabecalho from './componentes/cabecalho/Cabecalho';


ReactDOM.render(
  <React.StrictMode>
    <Cabecalho/>
    <h1 className={"titulo"}>Vamos começar!</h1>
    <Formulario/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
