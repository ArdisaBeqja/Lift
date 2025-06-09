// ./YourComponent.js
import React from 'react';
import { Card } from 'react-bootstrap';

const headers = [
  "Numri Serik",
  "Vendodhja e Instalimit",
  "Emri i Nderteses",
  "Data e Instalimit",
  "Data e Servisit te fundit",
  "Data e Inspektimit te rradhes",
  "Gjendja operacionale",
  "Kapaciteti(kg)",
  "Numri Maksimal i pasagjereve",
  "Shpejtesia(M/S)",
  "Lloj i Motorrit",
  "Lloj i Dyerve",
  "Detajet"
];

function YourComponent({ index }) {
  return (
    <span>{headers[index] || 'Unknown Header'}</span>
  );
}

export default YourComponent;
