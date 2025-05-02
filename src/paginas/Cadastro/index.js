import React, { Component } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../../Firebase';
import { doc, setDoc } from "firebase/firestore"; 

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
      email: "",
      senha: "",
      dataNascimento: ""
    };
  }

  gravar = async () => {
    try {
      const auth = getAuth();
      
      // 1. Criar usuário na autenticação
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        this.state.email,
        this.state.senha
      );

      // 2. Salvar dados no Firestore
      await setDoc(doc(db, "usuarios", userCredential.user.uid), {
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        email: this.state.email,
        dataNascimento: this.state.dataNascimento
      });

      this.setState({ mensagem: "Cadastro realizado com sucesso!" });

    } catch (error) {
      console.error("Erro:", error);
      this.setState({ mensagem: error.message });
    }
  }

  render() {
    return (
      <div>
        <h1>Cadastro</h1>
        <input
          type="text"
          placeholder="Nome"
          value={this.state.nome}
          onChange={(e) => this.setState({ nome: e.target.value })}
        />
        <br />
        <input
          type="text"
          placeholder="Sobrenome"
          value={this.state.sobrenome}
          onChange={(e) => this.setState({ sobrenome: e.target.value })}
        />
        <br />
        <input
          type="email"
          placeholder="E-mail"
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <br />
        <input
          type="dataNascimento"
          placeholder="Data de nascimento"
          value={this.state.dataNascimento}
          onChange={(e) => this.setState({ dataNascimento: e.target.value })}
        />
        <br />
        <input
          type="password"
          placeholder="Senha"
          value={this.state.senha}
          onChange={(e) => this.setState({ senha: e.target.value })}
        />
        <br />
        <button onClick={this.gravar}>Cadastrar</button>
        {this.state.mensagem && <p>{this.state.mensagem}</p>}
      </div>
    );
  }
}

export default Cadastro;