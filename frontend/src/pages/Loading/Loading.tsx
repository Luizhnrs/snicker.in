import React from 'react';
import './loading.css';

export default function Loading() {
  return (
    <main className="loading-container">
      <div className="spinner"></div>
      <p className="loading-message">Carregando</p>
    </main>
  );
}
