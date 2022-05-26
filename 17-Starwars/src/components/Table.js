import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function Table() {
  const { data, filterPlanetName } = useContext(TableContext);
  // console.log(data);
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Periodo de rotação</th>
          <th>Periodo orbital</th>
          <th>Diâmetro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Água de superfície</th>
          <th>População</th>
          <th>Filmes</th>
          <th>Criação</th>
          <th>Edição</th>
          <th>URL</th>
        </tr>
      </thead>

      <tbody>
        { data.filter(({ name }) => name.includes(filterPlanetName.planetName))
          .map((planet) => {
            const {
              name,
              rotation_period: rotationPeriod,
              orbital_period: orbitalPeriod,
              diameter,
              climate,
              gravity,
              terrain,
              surface_water: surfaceWater,
              population,
              films,
              created,
              edited,
              url,
            } = planet;
            return (
              <tr key={ name }>
                <td>{ name }</td>
                <td>{ rotationPeriod }</td>
                <td>{ orbitalPeriod }</td>
                <td>{ diameter }</td>
                <td>{ climate }</td>
                <td>{ gravity }</td>
                <td>{ terrain }</td>
                <td>{ surfaceWater }</td>
                <td>{ population }</td>
                <td>{ films }</td>
                <td>{ created }</td>
                <td>{ edited }</td>
                <td>{ url }</td>
              </tr>);
          })}
      </tbody>
    </table>
  );
}

export default Table;
