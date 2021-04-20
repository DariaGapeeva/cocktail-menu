import axios from "axios";

const responseTransformerCategories = (arr) => {
  let categories = arr.map((item, index) => {
    let address = item.strCategory.split(" ").join("_");
    const obj = {
      id: index,
      value: `${address}`,
      label: item.strCategory,
    };
    return obj;
  });

  return categories;
};

const responseTransformerDrinks = (arr) => {
  let drinks = arr.map((item) => {
    let address = item.strDrink.split(" ").join("_");
    const obj = {
      idDrink: item.idDrink,
      strDrink: item.strDrink,
      strDrinkThumb: item.strDrinkThumb,
      address: `${address}`,
    };
    return obj;
  });

  return drinks;
};

const responseTransformerCocktail = (obj) => {
  const objResult = {
    idDrink: obj.idDrink,
    strDrink: obj.strDrink,
    strDrinkThumb: obj.strDrinkThumb,
    strGlass: obj.strGlass,
    strAlcoholic: obj.strAlcoholic,
    strInstructions: obj.strInstructions,
    strIngredients: [
      obj.strIngredient1,
      obj.strIngredient2,
      obj.strIngredient3,
      obj.strIngredient4,
      obj.strIngredient5,
      obj.strIngredient6,
      obj.strIngredient7,
      obj.strIngredient8,
      obj.strIngredient9,
      obj.strIngredient10,
      obj.strIngredient11,
      obj.strIngredient12,
      obj.strIngredient13,
      obj.strIngredient14,
      obj.strIngredient15,
    ],
  };
  return objResult;
};

export const api = {
  async setCategories() {
    try {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
      );
      const result = responseTransformerCategories(response.data.drinks);
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  async setDrinks(value) {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${value}`
      );
      const result = responseTransformerDrinks(response.data.drinks);
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  async setCocktail(value) {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`
      );
      const result = responseTransformerCocktail(response.data.drinks[0]);
      return result;
    } catch (error) {
      console.log(error);
    }
  },
};
