import React, {useState} from 'react';

export default function UserCardsForm() {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvc, setCvc] = useState('');
  return (
    <form className="register-form">
      <div className="input-group">
        <label htmlFor="cardName">Nome do Cartão</label>
        <input
          type="text"
          id="cardName"
          name="cardName"
          required
          value={cardName}
          onChange={({target}) => setCardName(target.value)}
          placeholder="Exemplo do exemplo"
          autoComplete="cc-name"
        />
      </div>

      <div className="input-group">
        <label htmlFor="cardNumber">Número do Cartão</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          required
          value={cardNumber}
          onChange={({target}) => setCardNumber(target.value)}
          placeholder="0000 0000 0000 0000"
          autoComplete="cc-number"
        />
      </div>

      <div className="mini-inputs">
        <div className="input-group">
          <label htmlFor="expDate">Data de Expiração</label>
          <input
            type="text"
            id="expDate"
            name="expDate"
            required
            value={expDate}
            onChange={({target}) => setExpDate(target.value)}
            placeholder="00 / 00"
            autoComplete="cc-exp"
          />
        </div>

        <div className="input-group">
          <label htmlFor="cvc">CVC</label>
          <input
            type="text"
            id="cvc"
            name="cvc"
            required
            value={cvc}
            onChange={({target}) => setCvc(target.value)}
            placeholder="000"
          />
        </div>
      </div>
      <button type="submit" className="submit-button">
        Salvar
      </button>
    </form>
  );
}
