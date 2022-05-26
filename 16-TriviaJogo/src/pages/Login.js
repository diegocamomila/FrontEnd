import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveToken, saveUserInfo } from '../redux/actions';
import getToken from '../helpers/fetch';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      name: '',
      btnDisabled: true,
    };
    this.saveUserInfoOnStore = this.saveUserInfoOnStore.bind(this);
  }

  validationForm = () => {
    const { email, name } = this.state;

    const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const validationEmail = regexEmail.test(email);
    const validationName = name.length > 0;

    const errorCases = [validationEmail, validationName];

    const validationButton = errorCases.every((error) => error);

    this.setState({ btnDisabled: !validationButton });
  }

  handleChange = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value }, () => this.validationForm());
  }

  saveUserInfoOnStore = () => {
    const { dispatchSaveUserInfo } = this.props;
    dispatchSaveUserInfo(this.state);
  }

  handleClickPlay = async () => {
    const { history, dispatchSaveToken } = this.props;

    const token = await getToken();
    dispatchSaveToken(token);
    history.push('/playGame');
    this.saveUserInfoOnStore();
  }

  handleClickSettings = () => {
    const { history } = this.props;
    history.push('/settings');
  }

  render() {
    const { name, email, btnDisabled } = this.state;

    return (
      <div>
        <form onSubmit={ (event) => event.preventDefault() }>
          <label htmlFor="input-player-name">
            Name:
            <input
              data-testid="input-player-name"
              id="input-player-name"
              type="text"
              name="name"
              value={ name }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="input-gravatar-email">
            E-mail:
            <input
              data-testid="input-gravatar-email"
              id="input-gravatar-email"
              type="text"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <button
            data-testid="btn-play"
            type="submit"
            disabled={ btnDisabled }
            onClick={ this.handleClickPlay }
          >
            Play
          </button>
          <button
            data-testid="btn-settings"
            type="button"
            onClick={ this.handleClickSettings }
          >
            Settings
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  fetchAPI: PropTypes.func,
  history: PropTypes.func,
  token: PropTypes.string,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchSaveToken: (token) => dispatch(saveToken(token)),
  dispatchSaveUserInfo: (state) => dispatch(saveUserInfo(state)),
});

const mapStateToProps = (state) => ({
  token: state.token,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
