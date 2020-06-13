import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/


/* Render Element and Multiple Elelment 
ReactDOM.render(
[<h1>Hello India</h1>,
<p>I am Indian </p>], 
document.getElementById('root')); */

/* React Fragment */
/*ReactDOM.render(
  <React.Fragment>
  <h1>India</h1>
  <p>List of 5 Countries</p>
  <ol>
         <li>India</li>
         <li>Australia</li>
         <li>South Africa</li>
         <li>New Zealand</li>
         <li>Pakistan</li>
      </ol>
  </React.Fragment>,
  document.getElementById('root'));*/


  /* JSX Expresssion  
  Note - Inside {} we can use only Expression not Statement*/
  /*const name = 'shiv';
  ReactDOM.render(
    <h> My Name {name}</h>,
    document.getElementById('root')
  )*/

  // Template Literal
  const name =  'Shiv';
  const place  = 'Vns';

  const localDate = new Date().toLocaleDateString();

  const enIndiaTime  = new Date().toLocaleTimeString('en-IN').replace("am", "AM").replace("pm","PM");

  ReactDOM.render(
    <React.Fragment>
    <h1> {`Details : ${name} ${place}`}</h1>
    <p>{`Today's Date is : ${localDate}`}</p>
    <p>{`Current Time is :${enIndiaTime}`}</p>
    </React.Fragment>,
    document.getElementById('root')
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
