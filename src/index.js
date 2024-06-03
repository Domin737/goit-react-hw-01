import React from 'react'; // Importuje bibliotekę React
import ReactDOM from 'react-dom'; // Importuje ReactDOM do renderowania komponentów
import './index.css'; // Importuje globalne style
import App from './App'; // Importuje komponent App z poprawną ścieżką

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
