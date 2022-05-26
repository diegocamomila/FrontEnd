import React, { useContext, useEffect } from 'react';
import ButtonFilter from '../../components/buttons/ButtonFilter';
import Header from '../../components/header/Header';
import CardRecipe from '../../components/recipes/CardRecipe';
import MyContext from '../../context';

function FavoriteRecipes() {
  const { favoriteLocal, setFavoriteLocal } = useContext(MyContext);
  useEffect(() => {
    setFavoriteLocal(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }, []);
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [
    {
      id: '52771',
      type: 'food',
      nationality: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    },
  ];

  const renderFilter = favoriteLocal || favoriteRecipes;

  return (
    <section className="bg-zinc-200 h-screen">
      <Header title="Favorite Recipes" />
      <ButtonFilter />
      <section className="p-2">
        {
          renderFilter && renderFilter.map((recipe, index) => (
            <CardRecipe
              array={ favoriteLocal }
              index={ index }
              key={ recipe.id }
              src={ recipe.image }
              name={ recipe.name }
              pathname
              date={ false }
              tags={ false }
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

export default FavoriteRecipes;
