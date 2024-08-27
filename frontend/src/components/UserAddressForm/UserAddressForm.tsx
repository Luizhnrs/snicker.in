import React, {useState} from 'react';
import PhoneNumberInput from '../PhoneNumberInput';

export default function UserAddressForm() {
  const [fullName, setFullName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [complement, setComplement] = useState('');
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
          <PhoneNumberInput
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber} />
        </div>

        <div className="input-group">
          <label htmlFor="complement">Complemento</label>
          <input
            type="text"
            id="complement"
            name="complement"
            required
            value={complement}
            onChange={({target}) => setComplement(target.value)}
            placeholder="Apt 000"
          />
        </div>
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

      <div className="mini-inputs">
        <div className="input-group">
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            name="city"
            required
            value={city}
            onChange={({target}) => setCity(target.value)}
            placeholder="Nova exemplo"
          />
        </div>

        <div className="input-group">
          <label htmlFor="state">Estado</label>
          <input
            type="text"
            id="state"
            name="state"
            required
            value={state}
            onChange={({target}) => setState(target.value)}
            placeholder="São exemplo"
          />
        </div>
      </div>

      <button type="submit" className="submit-button">
      Adicionar novo endereço
      </button>
    </form>
  );
}
