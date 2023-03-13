import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { remove } from '../redux/actions';

class Table extends Component {
  handleClick = (id) => {
    const { dispatch } = this.props;

    dispatch(remove(id));
  };

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map(({
              id, description, tag, method, value, currency, exchangeRates,
            }) => (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{parseFloat(value).toFixed(2)}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>{(value * parseFloat(exchangeRates[currency].ask)).toFixed(2)}</td>
                <td>BRL</td>
                <td>
                  <button
                    data-testid="delete-btn"
                    onClick={ () => this.handleClick(id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
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

export default connect(mapStateToProps)(Table);
