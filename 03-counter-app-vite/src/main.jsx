import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

import './styles.css';



ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/*<App />*/}
        <FirstApp title="Hola, Markcode"/>
        <CounterApp value = { 0 }/>
    </React.StrictMode>
);

