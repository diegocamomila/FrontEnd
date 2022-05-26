import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends Component {
  redirectPlayAgain = () => {
    const { history } = this.props;
    history.push('/');
  }

  redirectRanking = () => {
    const { history } = this.props;
    history.push('/ranking');
  }

  messageConditional = () => {
    const { assertions } = this.props;
    const minAssertions = 3;
    if (assertions < minAssertions) return 'Could be better...';
    return 'Well Done!';
  };

  render() {
    const { assertions, score } = this.props;
    return (
      <>
        <Header />
        <h1 data-testid="feedback-text">feedback</h1>

        <h3>
          Você acertou
          <span data-testid="feedback-total-question">
            {assertions}
          </span>
          {assertions === 1 || assertions === 0 ? 'questão' : 'questões'}
        </h3>
        <h3>
          Você marcou
          <span data-testid="feedback-total-score">
            {`${score}`}
          </span>
          pontos
        </h3>

        <button
          data-testid="btn-play-again"
          type="button"
          onClick={ this.redirectPlayAgain }
        >
          Play Again
        </button>

        <button
          data-testid="btn-ranking"
          type="button"
          onClick={ this.redirectRanking }
        >
          Ranking
        </button>
        <div>feedback</div>
        <h1 data-testid="feedback-text">{this.messageConditional()}</h1>
      </>
    );
  }
}

Feedback.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
  assertions: PropTypes.number,
  score: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

export default connect(mapStateToProps, null)(Feedback);
