import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import getToken from '../helpers/fetch';
import { saveToken, savePts } from '../redux/actions';
import './PlayGame.css';

class PlayGame extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      loading: true,
      showAnswers: false,
      showCounter: true,
      seconds: 30,
      answers: [],
      nextBtn: false,
      indexQuestion: 0,
    };
  }

  componentDidMount() {
    this.getAPI();
    this.countTime();
  }

  validationCounter = () => {
    const { seconds } = this.state;
    if (seconds === 0) {
      clearInterval(this.counter);
      this.setState({ nextBtn: true, showCounter: false });
    }
  }

  showAnswers = ({ target }) => {
    const { name } = target;
    const composeName = name.split('/');
    this.setState({
      showAnswers: true,
      showCounter: false,
      nextBtn: true,
    }, () => {
      if (composeName[0] === 'correct_answer') this.attPts(name);
    });
  }

  getAPI = async () => {
    const { token, dispatchSaveToken } = this.props;
    const URL = `https://opentdb.com/api.php?amount=5&token=${token}`;
    const response = await fetch(URL);
    const data = await response.json();
    const responseCode = 3;
    if (data.response_code !== responseCode) {
      this.setState({
        questions: data.results,
        loading: false,
      }, () => this.setState({
        answers: this.sortAnswers(),
      }));
    } else {
      const reToken = await getToken();
      dispatchSaveToken(reToken);
      this.getAPI();
    }
  }

  attPts = (name) => {
    const { seconds } = this.state;
    const { dispatchAssertion } = this.props;
    const dif = name.split('/')[1];
    const NUM_BASE = 10;
    const HARD = 3;
    let composeDif = 1;
    if (dif === 'medium') {
      composeDif = 2;
    } else if (dif === 'hard') {
      composeDif = HARD;
    }

    const pts = NUM_BASE + (seconds * composeDif);
    dispatchAssertion(pts);
  }

  sortAnswers = () => {
    const { questions, indexQuestion } = this.state;
    const answers = [questions[indexQuestion]
      .correct_answer, ...questions[indexQuestion].incorrect_answers];

    const NUMBER = 0.5;
    const composeAnswers = answers.sort(() => Math.random() - NUMBER);
    return composeAnswers;
  }

  onClickNext = () => {
    const { indexQuestion } = this.state;
    const { history } = this.props;

    const MAX_INDEX = 4;
    if (indexQuestion === MAX_INDEX) {
      history.push('/feedback');
    } else {
      this.setState((prevState) => ({
        indexQuestion: prevState.indexQuestion + 1,
      }), () => this.setState({
        answers: this.sortAnswers(),
        seconds: 30,
        showAnswers: false,
        nextBtn: false,
        showCounter: true,
      }));
      clearInterval(this.counter);
      this.countTime();
    }
  };

  countTime() {
    const ONE_SECOND = 1000;
    this.counter = setInterval(() => {
      this.setState((prevState) => (
        { seconds: prevState.seconds - 1 }
      ), () => this.validationCounter());
    }, ONE_SECOND);
  }

  render() {
    const {
      questions,
      loading,
      showAnswers, showCounter, seconds, answers, nextBtn, indexQuestion } = this.state;
    if (loading) return <p>Carregando...</p>;

    return (
      <div>
        <Header />
        <div>
          <h2 data-testid="question-category">{ questions[indexQuestion].category }</h2>
          <h3 data-testid="question-text">{ questions[indexQuestion].question }</h3>

          <div data-testid="answer-options">
            { answers.map((answer, index) => (
              <button
                className={ showAnswers && (answer === questions[indexQuestion]
                  .correct_answer
                  ? 'correct_answer' : 'incorrect_answer') }
                data-testid={ answer === questions[indexQuestion].correct_answer
                  ? 'correct-answer' : `wrong-answer-${index}` }
                type="button"
                name={ answer === questions[indexQuestion].correct_answer
                  ? `correct_answer/${questions[indexQuestion]
                    .difficulty}` : 'incorrect_answer' }
                key={ answer }
                onClick={ !showAnswers ? this.showAnswers : undefined }
                disabled={ nextBtn }
              >
                { answer }
              </button>
            )) }
            { showCounter && (
              <div>
                Timer:
                { seconds }
              </div>
            ) }
          </div>
        </div>
        { nextBtn && (
          <button
            type="button"
            data-testid="btn-next"
            onClick={ this.onClickNext }
          >
            Next
          </button>) }
      </div>
    );
  }
}

PlayGame.propTypes = {
  dispatchSaveToken: PropTypes.func,
  dispatchAssertion: PropTypes.func,
  token: PropTypes.string,
  counter: PropTypes.bool,
  seconds: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  token: state.token,
  counter: state.counter.counter,
  seconds: state.counter.seconds,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSaveToken: (token) => dispatch(saveToken(token)),
  dispatchAssertion: (pts) => dispatch(savePts(pts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayGame);
