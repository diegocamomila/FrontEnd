import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const URL = 'https://economia.awesomeapi.com.br/json/all';
class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      currencys: [],
    };
  }

  componentDidMount() {
    this.currencyExchangeAPI();
  }

  currencyExchangeAPI = async () => {
    const promese = await fetch(URL);
    const response = await promese.json();
    // console.log(response);
    const dataAPI = this.setState({ currencys: Object.keys(response) }); // https://javascript.info/keys-values-entries
    return dataAPI;
  }

  render() {
    const { currencys } = this.state;
    // console.log(currencys);
    const { email } = this.props;

    return (
      <div>
        <header>
          <div>
            <h6 data-testid="email-field">{`Email ${email}`}</h6>
          </div>
          <div>
            <h6 data-testid="total-field">{`Despeza Total ${0}`}</h6>
          </div>
          <div>
            <h6 data-testid="header-currency-field">BRL</h6>
          </div>
        </header>

        <form>
          <label htmlFor="valorDespesa">
            Valor:
            <input
              type="valorDespesa"
              id="valorDespesa"
              name="valorDespesa"
              data-testid="value-input"
            />
          </label>

          <label htmlFor="descriçãoDespesa">
            Descrição:
            <input
              type="descriçãoDespesa"
              id="descriçãoDespesa"
              name="descriçãoDespesa"
              data-testid="description-input"
            />
          </label>
          <label htmlFor="currencys">
            Moeda:
            <select data-testid="currency-input" id="currencys">
              {
                currencys.map((currency) => currency !== 'USDT'
                && (
                  <option
                    key={ currency }
                    data-testid={ currency }
                  >
                    { currency }
                  </option>
                ))
              }
            </select>
          </label>

          <label htmlFor="metodoPagamento">
            Forma de Pagamento
            <select data-testid="method-input" name="metodoPagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tagDespesa">
            Categoria
            <select data-testid="tag-input" name="tagDespesa">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
