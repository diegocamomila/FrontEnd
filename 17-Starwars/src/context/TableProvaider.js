import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TableContext from './TableContext';
import getPlanets from '../helpers/functiom/functiom';

function TableProvider({ children }) {
// // O useState é o hook mais comum e ele permite que você utilize o state e outros recursos do React sem escrever uma classe
// // teremos um useState diferente para cada valor de estado que estiver sendo utilizado.

  //   //  O data é o valor do estado, o setData é a função que será usada para definir novos valores ao estado.
  //   //  useState( ) é onde você adiciona o valor inicial do seu estado, neste caso [] um array vazio pq ele vai receber valores .
  const [data, setData] = useState([]);
  const [filterPlanetName, setFilterPlanetName] = useState({ planetName: '' });
  const [filterPlanetNumerically, setFilterPlanetNumerically] = useState([]);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  //   // espaço para entendimento

  const globalContext = {
    data,
    setData,
    filterPlanetName,
    setFilterPlanetName,
    filterPlanetNumerically,
    setFilterPlanetNumerically,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
  };
    // Neste caso useEffect, a função será executada similarmente ao `componentDidMount`, rodando apenas uma vez e na montagem do componente.
  useEffect(() => {
    getPlanets().then(({ results }) => setData(results));
  }, []);

  return (
    <TableContext.Provider value={ globalContext }>
      { children }
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default TableProvider;
