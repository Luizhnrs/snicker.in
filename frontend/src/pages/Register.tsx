import { useState } from "react";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register</h1>
      </div>
      <RegisterForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        cpf={cpf}
        setCpf={setCpf}
        password={password}
        setPassword={setPassword}
      />
    </main>
  );
};
