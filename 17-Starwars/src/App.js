import React from 'react';
import './App.css';
import FilterPlanetName from './components/FilterPlanetName';
import FilterPlanetNumerically from './components/FilterPlanetNumerically';
import Table from './components/Table';
import TableProvider from './context/TableProvaider';

function App() {
  return (
    <TableProvider>
      <FilterPlanetName />
      <FilterPlanetNumerically />
      <Table />
    </TableProvider>
  );
}
// inicio de projeto
export default App;
