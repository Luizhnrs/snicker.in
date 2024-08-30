import React, {ChangeEvent} from 'react';

type CPFinputProps = {
  cpf: string,
  setCpf: (cpf: string) => void,
}

export default function CPFinput({cpf, setCpf}: CPFinputProps) {
  const handleCpfChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {target} = event;
    const {value} = target;
    const input = value.replace(/\D/g, '');
    const match = input.match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);

    if (match) {
      const formattedCpf = !match[2] ?
        match[1] :
        `${match[1]}.${match[2]}${match[3] ?
          `.${match[3]}` : ''}${match[4] ? `-${match[4]}` : ''}`;
      setCpf(formattedCpf);
    } else {
      setCpf(input);
    }
  };
  return (
    <>
      <label htmlFor="cpf">CPF</label>
      <input
        type="text"
        id="cpf"
        name="cpf"
        required
        value={cpf}
        onChange={handleCpfChange}
        placeholder="999.999.999-99"
      />
    </>
  );
}
