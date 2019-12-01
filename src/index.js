//Usando React
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';//Este es un archivo de npm

import './global.css';
import App from './components/App';

const container = document.getElementById('app');

//ReactDOM.render(__qué__(element),__dónde__(container));
ReactDOM.render(<App />,container);