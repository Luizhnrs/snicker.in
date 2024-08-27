import React from 'react';
import './aboutUs.css';
import Header from '../../components/Header';

export default function AboutUs() {
  return (
    <main className="about-page">
      <Header />
      <div className="about-container">
        <h1>Sobre nós</h1>
        <article>
          <p>
          A snicker.in é uma loja especializada
          na importação de tênis exclusivos
          e de alta qualidade. Nosso objetivo
          é trazer para você os modelos mais
          desejados e autênticos das principais
          marcas internacionais, garantindo originalidade
          e um serviço de excelência. Com uma curadoria
          atenta às tendências globais e ao estilo
          urbano, oferecemos uma seleção que atende desde
          os amantes da moda até os colecionadores mais exigentes.
          </p>
          <p>
          Na snicker.in, acreditamos que cada par
          de tênis conta uma história e pode ser o diferencia
          no seu estilo pessoal. Por isso, nos dedicamos a buscar os
          lançamentos mais quentes do mercado e edições limitadas
          que dificilmente seriam encontrados no Brasil. Além disso,
          nos comprometemos com a transparência e segurança em todo o
          processo de compra, oferecendo um atendimento personalizado
          para garantir sua satisfação.
          </p>
          <p>
          Seja para uso no dia a dia ou para incrementar sua coleção,
          na snicker.in você encontra o par perfeito para expressar
          sua personalidade. Explore nossa coleção e descubra o que
          há de melhor no universo dos tênis.
          </p>
        </article>
      </div>
    </ main>
  );
}
