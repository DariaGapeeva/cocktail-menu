import { api } from "./../API/api";

const CATEGORY_SET_VALUES = "CATEGORY_SET_VALUES";
const DRINKS_SET_VALUES = "DRINKS_SET_VALUES";
const COCKTAIL_SET = "COCKTAIL_SET";
const SET_DATA_COCKTAIL = "SET_DATA_COCKTAIL";

const initialState = {
  categories: [
    // { id: 0, value: "ordianry-drink", label: "Ordianry Drink" },
    // { id: 1, value: "cocktail", label: "Cocktail" },
    // { id: 2, value: "milk-float-shake", label: "Milk / Float / Shake" },
  ],
  drinks: [],
  category: "",
  cocktail: {},
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_SET_VALUES: {
      return {
        ...state,
        categories: action.categories,
      };
    }
    case DRINKS_SET_VALUES: {
      return {
        ...state,
        drinks: action.drinks,
        category: action.category,
      };
    }
    case COCKTAIL_SET: {
      return {
        ...state,
        cocktail: action.cocktail,
      };
    }
    case SET_DATA_COCKTAIL: {
      return {
        ...state,
        drinks: state.drinks.map((item) =>
          item.idDrink === action.id
            ? { ...item, strAlcoholic: action.alcohol, strGlass: action.glass }
            : item
        ),
      };
    }
    default:
      return state;
  }
};

const setCategoriesAC = (categories) => ({
  type: CATEGORY_SET_VALUES,
  categories,
});

export const setCategoriesThunk = () => {
  return async (dispatch) => {
    const response = await api.setCategories();
    dispatch(setCategoriesAC(response));
  };
};

const setDrinksAC = (drinks, category) => ({
  type: DRINKS_SET_VALUES,
  drinks,
  category,
});

const setDataCocktailAC = (id, alcohol, glass) => ({
  type: SET_DATA_COCKTAIL,
  id,
  alcohol,
  glass,
});

export const setDrinksThunk = (category) => {
  return async (dispatch) => {
    const response = await api.setDrinks(category);
    dispatch(setDrinksAC(response, category));
  };
};
const setCocktailAC = (cocktail) => ({
  type: COCKTAIL_SET,
  cocktail,
});

export const setCocktailThunk = (cocktail) => {
  return async (dispatch) => {
    const response = await api.setCocktail(cocktail);
    dispatch(setCocktailAC(response));
  };
};

export const setDataCocktailThunk = (cocktail_1) => {
  return async (dispatch) => {
    const response_1 = await api.setCocktail(cocktail_1);
    dispatch(
      setDataCocktailAC(
        response_1.idDrink,
        response_1.strAlcoholic,
        response_1.strGlass
      )
    );
  };
};

export default categoryReducer;
