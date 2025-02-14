import { useState } from 'react'
import gif from './assets/bear.gif'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const maxX = 90;
  const maxY = 92;

  const noEventHandler = () => {
    
    const left = (Math.random().toFixed(2) * 100) % maxX;
    const top = (Math.random().toFixed(2) * 100) % maxY;

    document.querySelector('#moving-btn').style.left = left + "%";
    document.querySelector('#moving-btn').style.top = top + "%";

     
  }

  const yesEventHandler = () => {
    document.querySelector('#ans').style.display ='block';
  }

  return (
    <>
      <div className="app-container">
          <h3>Will you be my Valentine, <span>Akyi Lay 💕</span>?</h3>

          <div>
            <button className="green" onClick={yesEventHandler}>Yes</button>
            <button id="moving-btn" className="moving-button red" onMouseOver={noEventHandler}>No</button>
          </div>

          <div className="ans" id="ans">
          <span>Yay! You’re my Valentine! Love you! ❤️🥰</span>
          <br></br>
          <img src={gif} style={{width: '200px', marginLeft: '100px'}}/>
            </div>

          
      </div>
     
    </>
  )
}

export default App
