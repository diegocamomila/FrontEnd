import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';
import DeckOfCardes from './components/deckofcards';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cardSave: [],
      hasTrunfo: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  onInputChange=({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.buttonValidation()); // a virgula foi dica do rod
  }

  onSaveButtonClick(event) {
    event.preventDefault(); // https://stackoverflow.com/questions/36316846/react-onclick-and-preventdefault-link-refresh-redirect
    console.log(event);
    this.setState((prevState) => {
      const { cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo } = this.state;
      return {
        cardSave: [...prevState.cardSave, { cardName,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardImage,
          cardRare,
          cardTrunfo }],
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
        hasTrunfo: prevState.hasTrunfo || cardTrunfo,
      };
    });
  }

  buttonValidation() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;

    const totalValue = 210;
    const maxValue = 90;

    if
    (cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0
      && ((Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) <= totalValue)
      && (Number(cardAttr1) <= maxValue && Number(cardAttr1) >= 0)
      && (Number(cardAttr2) <= maxValue && Number(cardAttr2) >= 0)
      && (Number(cardAttr3) <= maxValue && Number(cardAttr3) >= 0)) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  deleteCard({ target }) {
    const { cardSave } = this.state;
    const filterCardSave = cardSave.filter((card) => card.cardName !== target.name);
    const findTrunfo = filterCardSave.find((card) => card.cardTrunfo === true);
    return (
      findTrunfo
        ? this.setState({ cardSave: filterCardSave })
        : this.setState({ cardSave: filterCardSave, hasTrunfo: false })
    );
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      cardSave,
    } = this.state;

    return (
      <div className="container">
        <section>
          <h1>Tryunfo</h1>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ hasTrunfo }
          />

          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </section>
        <DeckOfCardes
          cardSave={ cardSave }
          deleteCard={ this.deleteCard }
        />

      </div>
    );
  }
}

export default App;
