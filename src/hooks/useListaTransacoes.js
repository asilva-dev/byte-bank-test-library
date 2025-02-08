import { useEffect, useState } from 'react';
import { buscaTransacoes } from '../services/transacoes.js';

export default function useListaTransacoes() {
  const [transacoes, setTransacoes] = useState([]);

  async function listaTransacoes() {
    const transacoes = await buscaTransacoes();
    setTransacoes(transacoes);
  }

  useEffect(() => {
    listaTransacoes();
  }, []);

  return [transacoes, setTransacoes];
}
