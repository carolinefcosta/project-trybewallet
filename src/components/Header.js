import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/Header.css';
import nota from '../img/nota.jpg';
import logado from '../img/logado.png';

class Header extends Component {
  render() {
    const { emailSave, expenses } = this.props;
    const reduce = expenses.reduce((acc, valorAtual) => {
      const { currency, exchangeRates, value } = valorAtual;
      const result = Number(value) * Number(exchangeRates[currency].ask);
      return acc + result;
    }, 0);
    return (
      <section className="section-header">
        <div className="div-trybe-img">
          <img src={ nota } alt="dinheiro-voando" className="img" />
          <h1 className="h1">TrybeWallet</h1>
        </div>
        <span className="span-total-despesas">
          <p>
            🪙 Total das Despesas:
          </p>
          <p data-testid="total-field">
          &nbsp;
          &nbsp;
            {reduce.toFixed(2)}
          </p>
          <p data-testid="header-currency-field">
            💲BRL
          </p>
        </span>
        <div className="div-header">
          <img src={ logado } alt="logado" className="img-header" />
          <p data-testid="email-field">
            {emailSave}
          </p>
        </div>

      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  emailSave: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  emailSave: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps)(Header);
