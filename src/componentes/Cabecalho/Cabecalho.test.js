const { render, screen } = require('@testing-library/react');
import Cabecalho from './index';

test('Deve renderizar o nome do usuário logado', () => {
  render(<Cabecalho />);
  const nomeUsuario = screen.getByText('Amanda Menezes');
  expect(nomeUsuario).toBeInTheDocument();
});
