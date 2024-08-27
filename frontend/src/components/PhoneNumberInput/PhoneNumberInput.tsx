import React, {ChangeEvent} from 'react';

type PhoneNumberInputProps = {
  phoneNumber: string,
  setPhoneNumber: (phoneNumber: string) => void,
}

export default function PhoneNumberInput({
  phoneNumber, setPhoneNumber}: PhoneNumberInputProps) {
  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {target} = event;
    const {value} = target;
    const input = value.replace(/\D/g, '');
    const match = input.match(/(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})/);

    if (match) {
      const formattedPhone = !match[2] ?
        match[1] :
        `(${match[1]}) ${match[2]}${match[3] ?
          ` ${match[3]}` : ''}${match[4] ? `-${match[4]}` : ''}`;
      setPhoneNumber(formattedPhone);
    } else {
      setPhoneNumber(input);
    }
  };
  return (
    <>
      <label htmlFor="phoneNumber">Número de Telefone</label>
      <input
        type="text"
        id="phoneNumber"
        name="phoneNumber"
        required
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="(99) 9 9999-9999"
        autoComplete="tel"
      />
    </>
  );
}
