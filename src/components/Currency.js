import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';

function Currency() {
  const { currency, dispatch } = useContext(AppContext);
  const [newCurrency, setNewCurrency ] = useState(currency);

  const currencyLabel = currency === '$' ? 'Dollar' : currency === '£' ? 'Pound' : currency === '€' ? 'Euro' : 'Ruppee';

  const handleCurrencyChange = (e) => {
    dispatch({
        type: 'CHG_CURRENCY',
        payload: e.target.value,
    });
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="p-3">
      Currency ({currency}{currencyLabel})
      </Dropdown.Toggle>

      <Dropdown.Menu className="bg-success">
        <Dropdown.Item as="button" value="$" onClick={handleCurrencyChange}>$ Dollar</Dropdown.Item>
        <Dropdown.Item as="button" value="£" onClick={handleCurrencyChange}>£ Pound</Dropdown.Item>
        <Dropdown.Item as="button" value="€" onClick={handleCurrencyChange}>€ Euro</Dropdown.Item>
        <Dropdown.Item as="button" value="₹" onClick={handleCurrencyChange}>₹ Ruppee</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  )
}

export default Currency