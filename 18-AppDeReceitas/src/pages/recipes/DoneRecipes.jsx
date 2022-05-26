import React, { useContext, useEffect } from 'react';
import ButtonFilter from '../../components/buttons/ButtonFilter';
import Header from '../../components/header/Header';
import CardRecipe from '../../components/recipes/CardRecipe';
import MyContext from '../../context';

function DoneRecipes() {
  const { doneLocal, setDoneLocal } = useContext(MyContext);
  useEffect(() => {
    setDoneLocal(JSON.parse(localStorage.getItem('doneRecipes')));
  }, []);
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [
    {
      id: '52771',
      type: 'food',
      nationality: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      doneDate: '23/06/2020',
      tags: ['Pasta', 'Curry'],
    },
  ];

  const renderFilter = doneLocal || doneRecipes;
  return (
    <section className="bg-zinc-200 h-screen">
      <Header title="Done Recipes" />
      <ButtonFilter />
      <section className="p-2">
        {
          renderFilter && renderFilter.map((recipe, index) => (
            <CardRecipe
              array={ doneLocal }
              index={ index }
              key={ recipe.id }
              src={ recipe.image }
              name={ recipe.name }
              pathname
              date={ recipe.doneDate }
              tags={ recipe.tags.map((tag) => tag) }
              category={ recipe.category }
              nacionality={ recipe.nationality }
              alcoholic={ recipe.alcoholicOrNot }
              id={ recipe.id }
              type={ recipe.type }
            />
          ))
        }
      </section>
    </section>
  );
}

export default DoneRecipes;
