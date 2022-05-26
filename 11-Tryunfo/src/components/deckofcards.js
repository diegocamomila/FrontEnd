import PropTypes from 'prop-types';
import React from 'react';
import Card from './Card';

class DeckOfCardes extends React.Component {
    render() {
        const { cardSave,
            deleteCard } = this.props;
        return (
            <div>
                <ul>
                {cardSave.map(
                    ({
                        cardName,
                        cardDescription,
                        cardAttr1,
                        cardAttr2,
                        cardAttr3,
                        cardImage,
                        cardRare,
                        cardTrunfo,
                    }) => (
                    <li key={ cardName }>
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

                        <button
                            data-testid="delete-button"
                            type="button"
                            onClick={ deleteCard }
                            name={ cardName }
                        >
                        Excluir
                        </button>
                    </li>
                    ),
                )}
                </ul>
            </div>
        );
    }
}

DeckOfCardes.propTypes = {
    cardSave: PropTypes.shape([
        {
            cardName: PropTypes.string.isRequired,
            cardDescription: PropTypes.string.isRequired,
            cardAttr1: PropTypes.number.isRequired,
            cardAttr2: PropTypes.number.isRequired,
            cardAttr3: PropTypes.number.isRequired,
            cardImage: PropTypes.string.isRequired,
            cardRare: PropTypes.string.isRequired,
            cardTrunfo: PropTypes.bool.isRequired,
        },
    ]).isRequired,
    deleteCard: PropTypes.func.isRequired,
};

export default DeckOfCardes;
