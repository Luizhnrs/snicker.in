import React, {useState} from 'react';
import UserForm from '../../components/UserForm';
import {useAuth} from '../../contexts/AuthContext';
import UserAddressForm from '../../components/UserAddressForm';
import './profileData.css';
import Header from '../../components/Header';

export default function ProfileData() {
  const [hideForm, setHideForm] = useState(false);
  const {user} = useAuth();
  return (
    <main className="profile-data-page">
      <Header />
      <div className="profile-data-container">
        <div className="profile-data-informations">
          <h2>Informações Pessoais</h2>
          <UserForm user={user} />
        </div>
        <div>
          <div className="profile-data-address">
            <h2>Endereços</h2>
            {
              hideForm ?
              (
                <div>
                  <button onClick={() => setHideForm(false)}>Voltar</button>
                  <UserAddressForm />
                </div>
            ):
              (
                <div className="flex-div">
                  <div className="address-card">
                    <h3>Apelido do endereço</h3>
                    <p>Nome da rua</p>
                    <p>Número, Complemento</p>
                    <p>CEP, Cidade, Estado</p>
                    <button
                      onClick={() => setHideForm(true)}
                    >Editar</button>
                  </div>
                  <button
                    className="hide-form-button"
                    onClick={() => setHideForm(true)}>
                      Cadastrar novo endereço</button>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </main>
  );
}
