import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategoriesThunk } from "./redux/CategoryReduser";
import Main from "./components/Main";
import Cocktail from "./components/Cocktail";

const App = () => {
  const categories = useSelector((state) => state.category.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategoriesThunk());
  }, []);

  return (
    <Switch>
      {categories.map((item) => (
        <Route
          key={item.id}
          path={`/${item.value}`}
          exact
          render={() => <Main value={item.value} label={item.label} />}
        />
      ))}
      <Route path={`/:idDrink`} render={() => <Cocktail />} />

      <Route path={`/`} exact component={Main} />
    </Switch>
  );
};

export default App;
