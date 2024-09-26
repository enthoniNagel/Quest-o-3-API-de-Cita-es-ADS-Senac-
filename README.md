# Questão 3: API de Citações

## Descrição do Projeto

Neste projeto, criamos um **componente React** que busca citações aleatórias de uma API chamada **Quotable**. O objetivo principal é exibir uma citação inspiradora junto com o nome do autor.

## Objetivos

- **Implementar requisições HTTP** para obter citações aleatórias.
- **Exibir a citação** e o autor de forma clara e agradável.
- Proporcionar uma experiência de usuário fluida, permitindo gerar novas citações com um clique.

## Detalhes Técnicos

O componente utiliza o hook `useEffect` para buscar as citações assim que o componente é montado. Abaixo está a estrutura básica do código:

```javascript
import React, { useState, useEffect } from 'react';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Erro ao buscar citação:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Citação Aleatória</h1>
      <p>"{quote}"</p>
      <h3>- {author}</h3>
      <button onClick={fetchQuote}>Gerar Nova Citação</button>
    </div>
  );
};

export default App;
