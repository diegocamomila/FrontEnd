import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.getHashFromEmail = this.getHashFromEmail.bind(this);
  }

  getHashFromEmail() {
    const { email } = this.props;
    const userHash = md5(email).toString();
    return userHash;
  }

  render() {
    const { name, score } = this.props;
    const hash = this.getHashFromEmail();

    return (
      <div>
        <img
          data-testid="header-profile-picture"
          src={ `https://www.gravatar.com/avatar/${hash}` }
          alt="user"
        />
        <span data-testid="header-player-name">
          {name}
        </span>
        <span data-testid="header-score">
          {score}
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.player.gravatarEmail,
  name: state.player.name,
  score: state.player.score,
});

Header.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  score: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
