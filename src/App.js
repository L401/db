import React from 'react';
import './App.css';
import watchImage from './watch.jpg'
import target from './target.png'
import cart from './shopping-cart.png'

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <img src={target} alt='Logo' width="50" height="50" />
          <input type="search" placeholder="Search" />
        <div>
        <img src={cart} alt='Logo' width="30" height="30" />

        </div>
      </div>
      <div className="flex-container">
        {Array(6).fill().map((_, i) => (
          <div key={i} className="flex-box">
            <img src={watchImage} alt="Watch" style={{maxWidth: '75%', maxHeight: '75%'}} />
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

