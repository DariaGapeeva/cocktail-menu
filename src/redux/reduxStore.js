import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import categoryReducer from "./CategoryReduser";
import commentsReducer from "./CommentsReducer";

let rootReducer = combineReducers({
  category: categoryReducer,
  comments: commentsReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
