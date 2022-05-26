import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets.map((planet) => (
          <PlanetCard
            planetName={ planet.name }
            key={ planet.name }
            planetImage={ planet.image }
          />

        ))}
      </div>
    );
  }
}
console.log(Planets);
export default SolarSystem;
