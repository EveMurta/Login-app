import React, { useState } from 'react';


function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  function verificaLogin(){

    if (email === 'eveline.amorim@pucpr.br' && senha === '123456') {
      setMensagem('Acessado com sucesso!');
    } else {
      setMensagem('Usuário ou senha incorretos!');
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <br />

      <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
      <br />

      <button onClick={verificaLogin}> Acessar </button>

      <p>{mensagem}</p>
    </div>
  );
}

export default App;
