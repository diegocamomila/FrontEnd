// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// class Header extends React.Component {
//   render() {
//     const { email } = this.props;
//     return (
//       <header>
//         <div>
//           <h6 data-testid="email-field">{`Email ${email}`}</h6>
//         </div>
//         <div>
//           <h6 data-testid="total-field">{`Despeza Total ${0}`}</h6>
//         </div>
//         <div>
//           <h6 data-testid="header-currency-field">BRL</h6>
//         </div>
//       </header>
//     );
//   }
// }

// Header.propTypes = {
//   email: PropTypes.string.isRequired,
// };

// const mapStateToProps = (state) => ({
//   email: state.user.email,
// });

// export default connect(mapStateToProps)(Header);
