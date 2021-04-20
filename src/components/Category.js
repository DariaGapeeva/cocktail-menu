import React, { useEffect } from "react";
import CocktailTitle from "./CocktailTitle";
import Wrapper from "./styled/Wrapper";
import { setDrinksThunk } from "../redux/CategoryReduser";
import { useDispatch, useSelector } from "react-redux";

const Category = ({ value }) => {
  const drinks = useSelector((state) => state.category.drinks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDrinksThunk(value));
  }, []);

  return (
    <Wrapper paddingBottom={174}>
      {drinks.map((item) => (
        <CocktailTitle
          key={item.idDrink}
          address={item.address}
          title={item.strDrink}
          picture={item.strDrinkThumb}
          idDrink={item.idDrink}
          value={value}
        />
      ))}
    </Wrapper>
  );
};

export default Category;
