import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
      setModalIsOpen(true); // Abre o modal ao buscar uma nova citação
    } catch (error) {
      console.error('Erro ao buscar citação:', error);
    }
  };

  const clearQuote = () => {
    setQuote('');
    setAuthor('');
    setModalIsOpen(false); // Fecha o modal ao limpar a citação
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Citação Aleatória</h1>
      <button onClick={fetchQuote}>Gerar Nova Citação</button>
      <button onClick={clearQuote} style={{ marginLeft: '10px' }}>Limpar Citação</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={clearQuote}
        ariaHideApp={false}
        className="ReactModal__Content"
        overlayClassName="ReactModal__Overlay"
      >
        <h2>Citação</h2>
        <p>"{quote}"</p>
        <h3>- {author}</h3>
        <button onClick={clearQuote}>Fechar</button>
      </Modal>
    </div>
  );
};

export default App;
