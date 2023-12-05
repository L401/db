import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import watchImage from './watch.jpg'
import logoImage from './target.png'
import cart from './shopping-cart.png'
import Checkout from './Checkout'; // import your Checkout component
import { CartContext } from './CartContext';
import predefinedStocks from './stocks';

// Predefined list of dates and stocks
const predefinedDates = [
  new Date(2022, 1, 1),
  new Date(2022, 2, 2),
  new Date(2022, 3, 3),
  new Date(2022, 4, 4),
  new Date(2022, 5, 5),
  new Date(2022, 6, 6),
];


function Product() {
  const { setCartItems } = React.useContext(CartContext);
  const [stocks, setStocks] = useState(() => {
    // Try to get the stocks from local storage
    const savedStocks = localStorage.getItem('stocks');
    if (savedStocks) {
      // If the stocks are found in local storage, parse them and return them
      return JSON.parse(savedStocks);
    } else {
      // If the stocks are not found in local storage, return the predefined stocks
      return predefinedStocks;
    }
  });

  useEffect(() => {
    // Whenever the stocks change, save them to local storage
    localStorage.setItem('stocks', JSON.stringify(stocks));
  }, [stocks]);

  const handleAddToCartClick = (item, index) => {
    setCartItems((prevItems) => [...prevItems, item]);

    // Decrease the stock by 1
    setStocks((prevStocks) => {
      const newStocks = [...prevStocks];
      newStocks[index] = newStocks[index] - 1;
      return newStocks;
    });
  };

  return (
    <div className="flex-container">
      {stocks.map((stock, i) => (
        <div key={i} className="flex-box">
          <img src={watchImage} alt="Watch" style={{maxWidth: '75%', maxHeight: '75%'}} />
          <button onClick={() => handleAddToCartClick(`Product ${i+1}`, i)}>Add to cart</button>
          <div>Delivery date: {predefinedDates[i].toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
          <div>Stock: {stock}</div>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [stocks, setStocks] = useState(() => {
    // Try to get the stocks from local storage
    const savedStocks = localStorage.getItem('stocks');
    if (savedStocks) {
      // If the stocks are found in local storage, parse them and return them
      return JSON.parse(savedStocks);
    } else {
      // If the stocks are not found in local storage, return the predefined stocks
      return predefinedStocks;
    }
  });

  useEffect(() => {
    // Whenever the stocks change, save them to local storage
    localStorage.setItem('stocks', JSON.stringify(stocks));
  }, [stocks]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, setStocks }}>
      <Router>
        <div className="App">
          <div className="navbar">
            <img src={logoImage} alt='Logo' width="30" height="30" />
            <input type="search" placeholder="Search" />
            <div>
              <Link to="/checkout">
                <img src={cart} alt='Logo' width="30" height="30" />
              </Link>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* ... other routes ... */}
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;

