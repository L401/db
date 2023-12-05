import React from 'react'
import  {useNavigate} from 'react-router-dom';
import { CartContext } from './CartContext';
import predefinedStocks from './stocks';

function Checkout() {
  const { cartItems } = React.useContext(CartContext);
  const { setStocks, setCartItems } = React.useContext(CartContext);
  const navigate = useNavigate();

   const handleReturnClick = () => {

    navigate('/')
    
  };

   const handleClearCartClick = () => {
    // Clear the cart
    setCartItems([]);
    setStocks(predefinedStocks);
  };

  return (
    <div>
      <h1>Checkout Page</h1>
      {cartItems.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <button onClick={handleReturnClick}>return</button>
      <button onClick={handleClearCartClick}>Clear Cart</button>
    </div>
  );
}

export default Checkout;