import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { emailSave } = this.props;
    return (
      <section>
        <div data-testid="email-field">
          {emailSave}
        </div>
        <div data-testid="total-field">0</div>
        <div data-testid="header-currency-field">BRL</div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  emailSave: state.user.email,
});

Header.propTypes = {
  emailSave: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
