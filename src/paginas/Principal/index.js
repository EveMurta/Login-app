import React, { Component } from 'react';
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../Firebase"; 

class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      loading: true
    };
  }

  componentDidMount() {
    this.fetchUserData();
  }

  fetchUserData = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        window.location.href = '/login';
        return;
      }

      const docRef = doc(db, "usuarios", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        this.setState({
          userData: docSnap.data(),
          loading: false
        });
      }
    } catch (error) {
      console.error("Erro:", error);
      this.setState({ loading: false });
    }
  };

  render() {
    if (this.state.loading) return <div>Carregando...</div>;

    return (
      <div>
        <h1>Página Principal</h1>
        {this.state.userData && (
          <div>
            <p>Nome: {this.state.userData.nome}</p>
            <p>Email: {this.state.userData.email}</p>
            <p>Data Nasc.: {this.state.userData.dataNascimento}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Principal;