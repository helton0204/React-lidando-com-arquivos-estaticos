import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cardapio from './pages/cardapio/cardapio';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( //aqui é o componente mãe de toda a aplicação
  <React.StrictMode>
    <Cardapio/>
  </React.StrictMode>
);


