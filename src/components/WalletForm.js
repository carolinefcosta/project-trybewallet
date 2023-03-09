import React, { Component } from 'react';

class WalletForm extends Component {
  render() {
    return (
      <section>
        <label htmlFor="value-input">
          <input data-testid="value-input" id="value-input" />
        </label>
        <textarea data-testid="description-input" />
        <select data-testid="currency-input">
          <option>a</option>
        </select>
      </section>
    );
  }
}

export default WalletForm;
