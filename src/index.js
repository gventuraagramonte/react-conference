// Sin usar React
// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

//Usando React
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';//Este es un archivo de npm

import './global.css';
import Badge from './components/Badge';

// const jsx = <h1>Hello, Platzi Badges!</h1>
// const element = React.createElement(
//     'a',
//     {href: 'https://platzi.com'},
//     'Ir a Platzi'
// );

const name = 'Peter';

// const element = React.createElement('h1',{},`Hola, soy ${name}`);
// const jsx = <h1>Hola, soy {name}</h1>
// const jsx = (
// <div>
//     <h1>Hola soy Giorgio</h1>
//     <p>Ingeniero Frontend</p>
// </div>);

const container = document.getElementById('app');

//ReactDOM.render(__qué__(element),__dónde__(container));
ReactDOM.render(
    <Badge 
        firstName = "Giorgio"
        lastName = "Ventura"
        avatarUrl = "https://www.gravatar.com/avatar?d=identicon"
        jobTitle = "Frontend Engineer"
        twitter = "gventuraAG"
    />,container);