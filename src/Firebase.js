// Firebase versão 9+ (modular)
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Configurações do seu projeto Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDWWgLhrflDqPjXy_tY8VIMNDsMhqr7sa8",
    authDomain: "projetoead-b84bc.firebaseapp.com",
    projectId: "projetoead-b84bc",
    storageBucket: "projetoead-b84bc.appspot.com",
    messagingSenderId: "1058806882677",
    appId: "1:1058806882677:web:03a58efa5dc2eb6114733c"
};

// Inicializa o app Firebase só se ainda não foi inicializado
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Cria a referência para o Firestore
const db = getFirestore(app);

 // Inicialize o serviço de autenticação
const auth = getAuth(app);

export { db, auth };
