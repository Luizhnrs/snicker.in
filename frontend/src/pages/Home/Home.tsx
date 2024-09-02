import React from 'react';
import Header from '../../components/Header';
import './home.css';

export default function Home() {
  return (
    <main className="home-page">
      <Header />
      <div className="home-container">
        <img src="https://assets.propmark.com.br/uploads/2022/07/unnamed---2022-07-07T095945.233.jpg" alt="" />
      </div>
    </main>
  );
}
