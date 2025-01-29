import { render, screen } from '@testing-library/react';
import Extrato from './index';

describe('Deve renderizar um campo de input', () => {
  const transacoes = [
    {
      transacao: 'Deposito',
      valor: 100
    }
  ];

  test('Deve renderizar uma lista de transações', () => {
    render(<Extrato transacoes={transacoes} />);
    const lista = screen.getByRole('listitem');
    expect(lista).toBeInTheDocument();
  });
});
