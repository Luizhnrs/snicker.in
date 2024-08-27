import React, {useState} from 'react';

export default function UserAddressForm() {
  const [fullName, setFullName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [number, setNumber] = useState('');
  return (
    <form className="register-form">
      <div className="input-group">
        <label htmlFor="fullName">Nome Completo</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          value={fullName}
          onChange={({target}) => setFullName(target.value)}
          placeholder="Exemplo do exemplo"
          autoComplete="name"
        />
      </div>

      <div className="input-group">
        <label htmlFor="streetAddress">Endereço</label>
        <input
          type="text"
          id="streetAddress"
          name="streetAddressr"
          required
          value={streetAddress}
          onChange={({target}) => setStreetAddress(target.value)}
          placeholder="Rua do exemplo"
          autoComplete="street-address"
        />
      </div>

      <div className="mini-inputs">
        <div className="input-group">
          <label htmlFor="postalCode">CEP</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            required
            value={postalCode}
            onChange={({target}) => setPostalCode(target.value)}
            placeholder="0000-000"
            autoComplete="postal-code"
          />
        </div>

        <div className="input-group">
          <label htmlFor="number">Número</label>
          <input
            type="text"
            id="number"
            name="number"
            required
            value={number}
            onChange={({target}) => setNumber(target.value)}
            placeholder="0000"
          />
        </div>
      </div>
      <button type="submit" className="submit-button">
      Adicionar novo endereço
      </button>
    </form>
  );
}
