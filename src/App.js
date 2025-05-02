import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Rotas from './rotas';



function App() {

  return (
    <Router>

      {/* Navegação */}
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Principal</Link>
        <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
        <Link to="/cadastro" style={{ marginRight: '10px' }}>Cadastro</Link>
      </nav>
      {/* Área de Conteúdo */}
      <Rotas />

    </Router>
  );
}

export default App;