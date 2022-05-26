import PropTypes from 'prop-types';
import React from 'react';

class Card extends React.Component {
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
        } = this.props;
        return (
            <section className="card">
                <h1 data-testid="name-card">
                    {/* Nome: */}
                    {cardName}
                </h1>
                <img data-testid="image-card" src={ cardImage } alt={ cardName } />
                <h3 data-testid="description-card">
                    {/* Descrição: */}
                    {cardDescription}
                </h3>
                <h3 data-testid="attr1-card">
                    {/* Atributo 1: */}
                    {cardAttr1}
                </h3>
                <h3 data-testid="attr2-card">
                    {/* Atributo 2: */}
                    {cardAttr2}
                </h3>
                <h3 data-testid="attr3-card">
                    {/* Atributo 3: */}
                    {cardAttr3}
                </h3>
                <h3 data-testid="rare-card">
                    {/* Raridade: */}
                    {cardRare}
                </h3>
                { cardTrunfo && <h3 data-testid="trunfo-card">Super Trunfo</h3>}
            </section>
        );
    }
}

Card.propTypes = {
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.number.isRequired,
    cardAttr2: PropTypes.number.isRequired,
    cardAttr3: PropTypes.number.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.string.isRequired,
}.isRequired;

export default Card;
