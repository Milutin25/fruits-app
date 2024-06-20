import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const fruits = [
    {
      name: 'Apple',
      color: 'Red',
      quantity: 10
    },
    {
      name: 'Banana',
      color: 'Yellow',
      quantity: 5
    },
    {
      name: 'Orange',
      color: 'Orange',
      quantity: 8
    },
    {
      name: 'Grapes',
      color: 'Purple',
      quantity: 12
    },
    {
      name: 'Mango',
      color: 'Yellow',
      quantity: 7
    }
  ]


  let yellowFruits = [];

  for (let key in fruits){
        const fruitObject = fruits[key];
      
    if (fruitObject.color === "Yellow"){
      yellowFruits.push(fruitObject.name);
    }  
          
      }

  return(
    <div>{yellowFruits}</div>
  )
}

export default App;
