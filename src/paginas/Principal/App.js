import { Outlet, useLocation } from 'react-router-dom';
import { calculaNovoSaldo } from '../../utils/index.js';
import { salvaTransacao } from '../../services/transacoes.js';
import { atualizaSaldo } from '../../services/saldo.js';
import useListaTransacoes from '../../hooks/useListaTransacoes.js';
import useSaldo from '../../hooks/useSaldo.js';
import estilos from './App.module.css';

import Cabecalho from '../../componentes/Cabecalho/index.jsx';
import Extrato from '../../componentes/Extrato/index.jsx';
import Menu from '../../componentes/Menu/index.jsx';
import Principal from '../../componentes/Principal/index.jsx';
import Transacao from '../../componentes/Transacao/index.jsx';

export default function App() {
  const [saldo, setSaldo] = useSaldo();
  const [transacoes, setTransacoes] = useListaTransacoes();
  const location = useLocation();

  function realizarTransacao(valores) {
    const novoSaldo = calculaNovoSaldo(valores, saldo);
    setSaldo(novoSaldo);
    atualizaSaldo(novoSaldo);
    setTransacoes([...transacoes, valores]);
    salvaTransacao(valores);
  }

  return (
    <>
      <Cabecalho />
      <main className={estilos.caixa}>
        <Menu path={location.pathname} />
        <div className={estilos.envelope}>
          <Principal saldo={saldo} />
          {location.pathname === '/' && (
            <Transacao realizarTransacao={realizarTransacao} />
          )}
          <Outlet />
          <noscript data-testid="local">{location.pathname}</noscript>
        </div>
        <Extrato transacoes={transacoes} />
      </main>
    </>
  );
}
