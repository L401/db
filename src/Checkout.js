import React from 'react'
import  {useNavigate} from 'react-router-dom';
import { CartContext } from './CartContext';
import predefinedStocks from './stocks';

function Checkout() {
  const { cartItems } = React.useContext(CartContext);
  const { setCartItems, setStocks } = React.useContext(CartContext);
  const navigate = useNavigate();

  // State for form inputs
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [ccNumber, setCcNumber] = React.useState("");

  const handleReturnClick = () => {
    navigate('/')
  };

  const handleClearCartClick = () => {
    setCartItems(prevItems => []);

    // Reset the stocks to their original values
    setStocks(prevStocks => [...predefinedStocks]);
  };

  return (
    <div>
      <h1>Checkout Page</h1>
      {cartItems.map((item, i) => (
        <div key={i}>
          {item.name} x{item.quantity}
        </div>
      ))}
      <button onClick={handleReturnClick}>home</button>
      <button onClick={handleClearCartClick}>Clear Cart</button>

      <h2>Checkout Form</h2>
      <form>
        <div>
          <label className='input-label'>
            Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </label>
        </div>
        <div>
          <label className='input-label'>
            Address:
            <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
          </label>
        </div>
        <div>
          <label className='input-label'>
            Email:
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
        </div>
        <div>
          <label className='input-label'>
            Phone:
            <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} />
          </label>
        </div>
        <div>
          <label className='input-label-cc' >
            Credit Card Number:
            <input type="text" value={ccNumber} onChange={e => setCcNumber(e.target.value)} />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Checkout;