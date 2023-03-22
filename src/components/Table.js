import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { remove } from '../redux/actions';
import '../styles/Table.css';

class Table extends Component {
  handleClick = (id) => {
    const { dispatch } = this.props;

    dispatch(remove(id));
  };

  // editClick = (id) => {
  //   const { dispatch } = this.props;

  //   dispatch(edit(id));
  // };

  render() {
    const { expenses } = this.props;
    return (
      <table className="table">
        <thead className="thead">
          <tr className="tr">
            <th className="th">Descrição</th>
            <th className="th">Tag</th>
            <th className="th">Método de pagamento</th>
            <th className="th">Valor</th>
            <th className="th">Moeda</th>
            <th className="th">Câmbio utilizado</th>
            <th className="th">Valor convertido</th>
            <th className="th">Moeda de conversão</th>
            <th className="th">Excluir</th>
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
                  {/* <button
                    data-testid="edit-btn"
                    onClick={ () => this.editClick(id) }
                  >
                    📝
                    Editar
                  </button> */}
                  <button
                    data-testid="delete-btn"
                    onClick={ () => this.handleClick(id) }
                  >
                    🗑️
                    {/* Excluir */}
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
