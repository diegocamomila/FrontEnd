import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { attSecs, counter } from '../redux/actions';

const ONE_SECOND = 1000;
class Countdown extends Component {
  componentDidMount() {
    this.countTime();
  }

  validationCounter = () => {
    const { seconds, dispatchCounter } = this.props;
    if (seconds === 0) {
      clearInterval(this.counter);
      dispatchCounter();
    }
  }

  countTime() {
    const { dispatchSeconds } = this.props;
    this.counter = setInterval(() => {
      dispatchSeconds();
      this.validationCounter();
    }, ONE_SECOND);
  }

  render() {
    const { seconds } = this.props;

    return (
      <div>
        Timer:
        { seconds }
      </div>
    );
  }
}

Countdown.propTypes = {
  dispatchCounter: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  seconds: state.counter.seconds,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSeconds: () => dispatch(attSecs()),
  dispatchCounter: () => dispatch(counter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Countdown);
