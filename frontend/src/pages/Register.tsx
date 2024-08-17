import { ChangeEvent, useState } from "react";
import RegisterForm from "../components/RegisterForm";
import "../styles/register.css"

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;
    let input = value.replace(/\D/g, '');
    const match = input.match(/(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})/);

    if (match) {
      const formattedPhone = !match[2]
        ? match[1]
        : `(${match[1]}) ${match[2]}${match[3] ? ` ${match[3]}` : ''}${match[4] ? `-${match[4]}` : ''}`;
      setPhoneNumber(formattedPhone);
    } else {
      setPhoneNumber(input);
    }
  };

  return (
    <main className="register-container">
      <div>
        <h1>SnickerIn</h1>
      </div>
      <RegisterForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phoneNumber={phoneNumber}
        handlePhoneNumberChange={handlePhoneNumberChange}
        cpf={cpf}
        setCpf={setCpf}
        password={password}
        setPassword={setPassword}
      />
    </main>
  );
};
