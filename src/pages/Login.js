import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import savedEmail from '../redux/actions';
import '../styles/Login.css';
import nota from '../img/nota.jpg';

class Login extends React.Component {
  state = {
    disabled: true,
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      if (this.emailAuthorized() && this.passwordAuthorized()) {
        this.setState({
          disabled: false,
        });
      } else {
        this.setState({
          disabled: true,
        });
      }
    });
  };

  // Para verificação de e-mail, pesquisei no stackoverflow para auxílio da construção de minha função: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail

  emailAuthorized = () => {
    const { email } = this.state;
    const regexValidation = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
    return regexValidation.test(email);
  };

  // Para verificação de senha, pesquisei em meu projeto trybetunes para facilitar o processo.
  passwordAuthorized = () => {
    const minLength = 6;
    const { password } = this.state;
    return (password.length >= minLength);
  };

  handleClick = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const { history, dispatch } = this.props;
    dispatch(savedEmail(email));
    history.push('/carteira');
  };

  render() {
    const { disabled, email, password } = this.state;
    return (
      <form className="form">
        <div className="div-trybe-img">
          <img src={ nota } alt="dinheiro-voando" className="img" />
          <h1 className="h1">TrybeWallet</h1>
        </div>
        <div>
          <label htmlFor="email-input">
            <input
              placeholder="E-mail:"
              className="email-input"
              data-testid="email-input"
              id="email-input"
              required
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="password-input">
            <input
              placeholder="Senha:"
              className="password-input"
              data-testid="password-input"
              id="password-input"
              required
              type="password"
              minLength="6"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
        </div>

        <button
          className="button"
          disabled={ disabled }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(null)(Login);
