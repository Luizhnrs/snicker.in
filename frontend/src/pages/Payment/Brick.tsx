import React from 'react';
import {Payment} from '@mercadopago/sdk-react';
import {
  IPaymentBrickCustomization,
  IPaymentFormData,
} from '@mercadopago/sdk-react/bricks/payment/type';

export default function Brick() {
  const initialization = {
    amount: 100,
    preferenceId: '<PREFERENCE_ID>',
  };
  const customization: IPaymentBrickCustomization = {
    paymentMethods: {
      ticket: 'all',
      bankTransfer: 'all',
      creditCard: 'all',
      debitCard: 'all',
      mercadoPago: 'all',
      atm: 'all',
    },
  };
  const onSubmit = async (
      {selectedPaymentMethod, formData}: IPaymentFormData,
  ) => {
    // callback chamado ao clicar no botão de submissão dos dados
    return new Promise(() => {
      fetch('/process_payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
          .then((response) => response.json())
          .then((response) => {
            console.log(selectedPaymentMethod);
            console.log(response);
          })
          .catch((error) => {
          // lidar com a resposta de erro ao tentar criar o pagamento
            console.log(error);
          });
    });
  };
  const onError = async (error: unknown) => {
    // callback chamado para todos os casos de erro do Brick
    console.log(error);
  };
  const onReady = async () => {
    /*
      Callback chamado quando o Brick estiver pronto.
      Aqui você pode ocultar loadings do seu site, por exemplo.
    */
  };
  return (
    <Payment
      initialization={initialization}
      customization={customization}
      onSubmit={onSubmit}
      onReady={onReady}
      onError={onError}
    />
  );
}
