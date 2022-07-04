import React from 'react';
import { render } from 'react-dom';
//si se import primero index css; el componente App no se puede renderizar
import App from './App';
import "./index.css";
render(
    <App />,
    document.getElementById('app')
);
