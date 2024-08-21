import React from 'react';

export default function ShippingEstimateForm() {
  return (
    <form className="shipping-estimate-form">
      <p>Prazo de entrega</p>
      <div>
        <input type="text" id="cep" />
        <button>Calcular</button>
      </div>
      <a
        href="https://buscacepinter.correios.com.br/app/endereco/index.php"
        target="_blank" rel="noopener noreferrer"
      >Não sei meu cep</a>
    </form>
  );
}
