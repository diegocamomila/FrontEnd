import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetPts } from '../redux/actions';

// Source: https://stackoverflow.com/questions/12162786/adding-new-objects-to-localstorage
const oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
class Ranking extends Component {
  resetTotalScore = () => {
    const { dispatchSavePts } = this.props;
    const ZERO = 0;
    dispatchSavePts(ZERO);
  }

  redirectToLoginScreen = () => {
    const { history } = this.props;
    history.push('/');

    this.resetTotalScore();
  }

  saveOnLocalStorage = () => {
    const { name, score } = this.props;
    const newObj = {
      name,
      score,
    };
    oldItems.push(newObj);
    localStorage.setItem('player', JSON.stringify(oldItems));
  }

  renderRanking = () => {
    const arr = JSON.parse(localStorage.getItem('player'));

    // Remove the first element that is empty element
    if (arr[0].name.length === 0) arr.shift();

    return arr.sort((a, b) => b.score - a.score).map((obj, index) => (
      <>
        <p key={ obj.name } data-testid={ `player-name-${index}` }>{obj.name}</p>
        <p key={ obj.score } data-testid={ `player-score-${index}` }>{obj.score}</p>
      </>
    ));
  };

  render() {
    this.saveOnLocalStorage();
    return (
      <>
        <h1 data-testid="ranking-title">Ranking</h1>

        <button
          data-testid="btn-go-home"
          type="button"
          onClick={ this.redirectToLoginScreen }
        >
          Play Again
        </button>
        {this.renderRanking()}
      </>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  name: state.player.name,
  email: state.player.email,
  score: state.player.score,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSavePts: (pts) => dispatch(resetPts(pts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
