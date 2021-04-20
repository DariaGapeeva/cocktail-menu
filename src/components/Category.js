import React, { useEffect, useState } from "react";
import CocktailTitle from "./CocktailTitle";
import Wrapper from "./styled/Wrapper";
import { setDataCocktailThunk, setDrinksThunk } from "../redux/CategoryReduser";
import { useDispatch, useSelector } from "react-redux";

const Category = ({ value }) => {
  const [currentPage, setCurrentPage] = useState(4);
  const drinks = useSelector((state) => state.category.drinks);

  const scrollHandler = (event) => {
    if (event.target.documentElement.scrollTop > 100 * currentPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDrinksThunk(value));
  }, []);

  useEffect(() => {
    if (drinks.length !== 0) {
      dispatch(setDataCocktailThunk(drinks[0].address));
      dispatch(setDataCocktailThunk(drinks[1].address));
      dispatch(setDataCocktailThunk(drinks[2].address));
      dispatch(setDataCocktailThunk(drinks[3].address));
      dispatch(setDataCocktailThunk(drinks[4].address));
    }
  }, [drinks.length]);

  useEffect(() => {
    if (drinks.length !== 0 && currentPage < drinks.length) {
      dispatch(setDataCocktailThunk(drinks[currentPage].address));
    }
  }, [currentPage]);

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
          alcohol={item.strAlcoholic}
          glass={item.strGlass}
        />
      ))}
    </Wrapper>
  );
};

export default Category;
