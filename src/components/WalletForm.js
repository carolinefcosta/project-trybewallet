import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiCoins, saveExpenses } from '../redux/actions';
import '../styles/WalletForm.css';

class WalletForm extends Component {
  state = {
    value: '0',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApiCoins());
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = async (e) => {
    e.preventDefault();
    const { dispatch, expenses } = this.props;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json();
    dispatch(saveExpenses(
      {
        ...this.state,
        exchangeRates: result,
        id: expenses.length,
      },
    ));
    this.setState({
      value: '',
      description: '',
    });
  };

  render() {
    const {
      value,
      currency,
      method,
      tag,
      description,
    } = this.state;
    const { currencies } = this.props;
    return (
      <form className="form-wallet-form">
        <div>
          <label htmlFor="description-input">
            Descrição da Despesa:
            &nbsp;
            <textarea
              data-testid="description-input"
              type="text"
              id="description-input"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          &nbsp;
          &nbsp;
          <label htmlFor="value-input">
            Valor da Despesa:
            &nbsp;
            <input
              data-testid="value-input"
              type="number"
              id="value-input"
              name="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="currency-input">
            Moeda:
            &nbsp;
            <select
              data-testid="currency-input"
              id="currency-input"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              {
                currencies.map((coin, index) => (
                  <option key={ index } value={ coin }>{coin}</option>
                ))
              }
            </select>
          </label>
          &nbsp;
          &nbsp;
          <label htmlFor="method-input">
            Método de Pagamento:
            &nbsp;
            <select
              data-testid="method-input"
              id="method-input"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          &nbsp;
          &nbsp;
          <label htmlFor="tag-input">
            Categoria:
            &nbsp;
            <select
              data-testid="tag-input"
              id="tag-input"
              name="tag"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </div>
        <button
          className="button-adc-despesa"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
