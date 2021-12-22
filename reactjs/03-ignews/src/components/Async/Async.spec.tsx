import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { Async } from '.';

test('it renders correctly', async () => {
  render(<Async />);

  expect(screen.getByText('Hello world')).toBeInTheDocument();

  // `find` espera o elemento aparecer em tela, diferente do `get`
  // tip: todo `getBy` tem sua versão `findBy`
  expect(await screen.findByText('Button')).toBeInTheDocument();

  // outra estratégias para testar componentes asyncs
  // await waitFor(() => {
  //   expect(screen.getByText('Button')).toBeInTheDocument();
  // })

  // teste para verificar se um elemento é removido da tela
  // tip: 
  //  -> `screen.get` ou `screen.find`: dá erro se não encontra o elemento especificado
  //  -> `screen.query`: não dá erro caso não encontre o elemento especificado
  // await waitForElementToBeRemoved(screen.queryByText('Button'));
})