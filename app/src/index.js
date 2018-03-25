import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import HelloWorld from './HelloWorld'
import PropsValidation from './PropsValidation'
import Events from './Events'
import Translate from './Translate'

ReactDOM.render(
    //Passamos o valor do props da classe helloword aqui dentro do txt
//    <HelloWorld txt = 'Hello World from React.js by School of Net   '/>,
//    <PropsValidation name = "Roger" age = "29" height = "1.66"/>,
    <Events />,
    //<Translate />,
    document.getElementById("root")
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
