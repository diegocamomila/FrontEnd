import React, { useContext } from 'react';
import TableContext from '../context/TableContext';
import { COLUMN } from '../helpers/constants/constants';

function FilterPlanetNumerically() {
  const {
    filterPlanetNumerically,
    setFilterPlanetNumerically,
    column,
    comparison,
    value,
    setValue,
    setColumn,
    setComparison,
  } = useContext(TableContext);

  const handleClick = () => {
    setFilterPlanetNumerically((prevFilter) => [
      ...prevFilter,
      { column: column || comparison, value },
    ]);
    setColumn('');
    setComparison('maior que');
    setValue('0');
  };

  return (
    <form>
      <label htmlFor="column">
        <select
          value={ column }
          data-testid="column-filter"
          id="column"
          onChange={ ({ target }) => setColumn(target.value) }
        >
          { COLUMN
            .filter((option) => filterPlanetNumerically
              .every((filter) => filter.column !== option))
            .map((option) => (<option key={ option }>{ option }</option>))}
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          data-testid="comparison-filter"
          value={ comparison }
          id="comparison"
          onChange={ ({ target }) => setComparison(target.value) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        <input
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
          data-testid="value-filter"
          id="value"
          type="number"
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </form>
  );
}

export default FilterPlanetNumerically;
