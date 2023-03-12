import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Wallet from '../pages/Wallet';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testa as funcionalidades do componente Wallet', () => {
  // it('A rota para esta página deve ser /carteira', () => {
  //   const { history } = renderWithRouterAndRedux(<App />);
  //   history.push('/carteira');

  //   const valueInput = screen.getByTestId('value-input');
  //   expect(valueInput).toBeNull();
  // });

  // it('Inputs renderizados na tela', () => {
  //   renderWithRouterAndRedux(<Wallet />);

  //   const valueInput = screen.getByTestId('value-input');
  //   expect(valueInput).toBeInTheDocument();

  //   const currencyInput = screen.getByTestId('currency-input');
  //   expect(currencyInput).toBeInTheDocument();

  //   const methodInput = screen.getByTestId('method-input');
  //   expect(methodInput).toBeInTheDocument();

  //   const tagInput = screen.getByTestId('tag-input');
  //   expect(tagInput).toBeInTheDocument();

  //   const descriptionInput = screen.getByTestId('description-input');
  //   expect(descriptionInput).toBeInTheDocument();
  // });

  it('A tabela deve possuir um cabeçalho com os campos: Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido, Moeda de conversão, Editar/Excluir', () => {
    renderWithRouterAndRedux(<Wallet />);

    const button = screen.getByRole('button', { name: /Adicionar despesa/i });

    userEvent.click(button);

    expect(screen.getByRole('columnheader', { name: 'Descrição' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Tag' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Método de pagamento' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Moeda' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Câmbio utilizado' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Valor convertido' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Moeda de conversão' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Editar/Excluir' })).toBeInTheDocument();
  });
});
