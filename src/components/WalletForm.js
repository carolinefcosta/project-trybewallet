import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiCoins } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApiCoins());
  }

  render() {
    const { currencies } = this.props;
    return (
      <section>
        <label htmlFor="value-input">
          Valor da Despesa:
          <input data-testid="value-input" id="value-input" />
        </label>
        <label htmlFor="currency-input">
          Moeda:
          <select data-testid="currency-input" id="currency-input">
            {
              currencies.map((coin, index) => (
                <option key={ index } value={ coin }>{coin}</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="method-input">
          Método de Pagamento:
          <select data-testid="method-input" id="method-input">
            {/* <option /> */}
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Categoria:
          <select data-testid="tag-input" id="tag-input">
            {/* <option /> */}
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="description-input">
          Descrição:
          <textarea data-testid="description-input" id="description-input" />
        </label>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
