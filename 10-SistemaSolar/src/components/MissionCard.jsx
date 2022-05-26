import React from 'react';
import PropTypes from 'prop-types';

function MissionCard({ year, name, country, destination }) {
  return (
    <div data-testid="mission-card">
      <p data-testid="mission-name">{name}</p>
      <p data-testid="mission-year">{year}</p>
      <p data-testid="mission-country">{country}</p>
      <p data-testid="mission-destination">{destination}</p>
    </div>
  );
}

MissionCard.propTypes = {
// missao: PropTypes.shape({
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
// }).isRequired,
};

// class MissionCard extends React.Component {
//   render() {
//     const { name, year, country, destination } = this.props;
//     // const { name } = missao;
//     // const { year } = missao;
//     // const { country } = missao;
//     // const { destination } = missao;
//     return (
//       <div data-testid="mission-card">
//         <p data-testid="mission-name">{name}</p>
//         <p data-testid="mission-year">{year}</p>
//         <p data-testid="mission-country">{country}</p>
//         <p data-testid="mission-destination">{destination}</p>
//       </div>
//     );
//   }
// }
// MissionCard.propTypes = {
//   missao: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     year: PropTypes.string.isRequired,
//     country: PropTypes.string.isRequired,
//     destination: PropTypes.string.isRequired,
//   }).isRequired,
// };
export default MissionCard;
