import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleLogin = () => {
    if (email === 'eduardo.lino@pucpr.br' && senha === '123456') {
      setMensagem('Acessado com sucesso!');
    } else {
      setMensagem('Usuário ou senha incorretos!');
    }
  };

  return (
    <div style={{ margin: '50px', fontFamily: 'Arial' }}>
      <h1>Login</h1>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '250px' }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '250px' }}
        />
        <button onClick={handleLogin} style={{ padding: '5px 10px' }}>
          Acessar
        </button>
        <p style={{ marginTop: '20px' }}>{mensagem}</p>
      </div>
    </div>
  );
}

export default App;
