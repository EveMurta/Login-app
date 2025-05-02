import { Routes, Route, Navigate } from "react-router-dom";
import Principal from './paginas/Principal';
import Cadastro from './paginas/Cadastro';
import Login from './paginas/Login';
import { getAuth } from "firebase/auth";

// Componente para proteger rotas
const ProtectedRoute = ({ children }) => {
  const auth = getAuth();
  return auth.currentUser ? children : <Navigate to="/login" replace />;
};

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
          <Principal />
        </ProtectedRoute>
      } />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      
      {/* Rota de fallback para páginas não encontradas */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Rotas;