import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testa as funcionalidades do componente Login', () => {
  it('Rota para esta página deve ser /', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    expect(history.location.pathname).toBe('/');
  });

  it('Inputs renderizados na tela', () => {
    renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();
    
    const inputPassword = screen.getByTestId('password-input');
    expect(inputPassword).toBeInTheDocument();
  });

  it('Botão Entrar', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();

    userEvent.type(inputEmail, 'teste@teste.com');

    const inputPassword = screen.getByTestId('password-input');
    expect(inputPassword).toBeInTheDocument();

    userEvent.type(inputPassword, '123456');

    const button = screen.getByRole('button', { name: /Entrar/i });
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    expect(history.location.pathname).toBe('/carteira');
  });
});
