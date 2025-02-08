import { Route, Routes } from 'react-router-dom';
import Cartoes from './componentes/Cartoes/index.jsx';
import Investimentos from './componentes/Investimentos/index.jsx';
import Servicos from './componentes/Servicos/index.jsx';
import Pagina404 from './paginas/Pagina404/index.jsx';
import App from './paginas/Principal/App.js';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="cartoes" element={<Cartoes />} />
        <Route path="investimentos" element={<Investimentos />} />
        <Route path="servicos" element={<Servicos />} />
      </Route>
      <Route path="*" element={<Pagina404 />} />
    </Routes>
  );
}
