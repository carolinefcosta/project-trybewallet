import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Wallet from '../pages/Wallet';
import { renderWithRouterAndRedux } from './helpers/renderWith';
// import mockCoin from './mock/wallet.mock';

describe('Testa as funcionalidades do componente Wallet', () => {
  it('Inputs renderizados na tela', () => {
    renderWithRouterAndRedux(<Wallet />);

    const valueInput = screen.getByTestId('value-input');
    expect(valueInput).toBeInTheDocument();
    userEvent.type(valueInput, '10');

    const currencyInput = screen.getByTestId('currency-input');
    expect(currencyInput).toBeInTheDocument();
    userEvent.type(currencyInput, 'USD');

    const methodInput = screen.getByTestId('method-input');
    expect(methodInput).toBeInTheDocument();
    userEvent.type(methodInput, 'Dinheiro');

    const tagInput = screen.getByTestId('tag-input');
    expect(tagInput).toBeInTheDocument();
    userEvent.type(tagInput, 'Alimentação');

    const descriptionInput = screen.getByTestId('description-input');
    expect(descriptionInput).toBeInTheDocument();
    userEvent.type(descriptionInput, 'teste');

    const buttonAdcDespesa = screen.getByRole('button', { name: /Adicionar despesa/i });
    expect(buttonAdcDespesa).toBeInTheDocument();

    userEvent.click(buttonAdcDespesa);
  });

  // it('A tabela deve possuir um cabeçalho com os campos: Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido, Moeda de conversão, Editar/Excluir', () => {
  //   renderWithRouterAndRedux(<Wallet />);

  //   const button = screen.getByRole('button', { name: /Adicionar despesa/i });

  //   userEvent.click(button);

  //   expect(screen.getByRole('columnheader', { name: /Descrição/i })).toBeInTheDocument();
  //   expect(screen.getByRole('columnheader', { name: /Tag/i })).toBeInTheDocument();
  //   expect(screen.getByRole('columnheader', { name: /Método de pagamento/i })).toBeInTheDocument();
  //   expect(screen.getByRole('columnheader', { name: /Valor/i })).toBeInTheDocument();
  //   expect(screen.getByRole('columnheader', { name: /Moeda/i })).toBeInTheDocument();
  //   expect(screen.getByRole('columnheader', { name: /Câmbio utilizado/i })).toBeInTheDocument();
  //   expect(screen.getByRole('columnheader', { name: /Valor convertido/i })).toBeInTheDocument();
  //   expect(screen.getByRole('columnheader', { name: /Moeda de conversão/i })).toBeInTheDocument();
  //   expect(screen.getByRole('columnheader', { name: 'Editar/Excluir' })).toBeInTheDocument();
  // });

  // it('Testa se o valor digitado pelo usuário é convertido corretamente', () => {
  //   jest.spyOn(global, 'fetch').mockResolvedValue(mockCoin);
  //   renderWithRouterAndRedux(<Wallet />);

  //   const valueInput = screen.getByTestId('value-input');
  //   expect(valueInput).toBeInTheDocument();
  //   userEvent.type(valueInput, '10');

  //   const currencyInput = screen.getByTestId('currency-input');
  //   expect(currencyInput).toBeInTheDocument();
  //   userEvent.type(currencyInput, 'USD');

  //   const methodInput = screen.getByTestId('method-input');
  //   expect(methodInput).toBeInTheDocument();
  //   userEvent.type(methodInput, 'Dinheiro');

  //   const tagInput = screen.getByTestId('tag-input');
  //   expect(tagInput).toBeInTheDocument();
  //   userEvent.type(tagInput, 'Alimentação');

  //   const descriptionInput = screen.getByTestId('description-input');
  //   expect(descriptionInput).toBeInTheDocument();
  //   userEvent.type(descriptionInput, 'teste');

  //   const buttonAdcDespesa = screen.getByRole('button', { name: /Adicionar despesa/i });
  //   expect(buttonAdcDespesa).toBeInTheDocument();

  //   userEvent.click(buttonAdcDespesa);

  //   const headerValue = screen.getByTestId('total-field');
  //   expect(headerValue).toHaveValue('50');
  // });
});
