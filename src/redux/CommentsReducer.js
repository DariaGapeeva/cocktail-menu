import { dataTransformer } from "./../common/functions";

const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

let initialState = {
  comments: [
    // {
    //   id: 15300,
    //   comments: [
    //     {
    //       id: 1,
    //       name: "Name_1",
    //       date: "13 Apr 2021, 10:12 am",
    //       comment:
    //         "In ultricies fermentum aliquet. Pellentesque dui magna, condimentum non ullamcorper at, cursus in sem. Nunc condimentum, purus ac sagittis ultricies, metus leo pharetra mi, non vehicula felis elit et nisi. Etiam venenatis commodo libero, vel ullamcorper nibh lobortis vel. Aliquam auctor porta tortor, nec consequat nibh finibus a. Sed ultrices risus eget iaculis luctus. Mauris vel gravida magna.",
    //     },
    //     {
    //       id: 2,
    //       name: "Name_2",
    //       date: "13 Apr 2021, 10:12 am",
    //       comment:
    //         "In ultricies fermentum aliquet. Pellentesque dui magna, condimentum non ullamcorper at, cursus in sem. Nunc condimentum, purus ac sagittis ultricies, metus leo pharetra mi, non vehicula felis elit et nisi. Etiam venenatis commodo libero, vel ullamcorper nibh lobortis vel. Aliquam auctor porta tortor, nec consequat nibh finibus a. Sed ultrices risus eget iaculis luctus. Mauris vel gravida magna.",
    //     },
    //   ],
    // },
  ],
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      let newState = { ...state, comments: state.comments };
      let result = state.comments.findIndex((item) => item.id === action.id);
      action.dateComment = dataTransformer(action.dateComment);
      if (result === -1) {
        newState.comments.push({
          id: action.id,
          comments: [{ ...action.newComment, id: 1, date: action.dateComment }],
        });
      } else {
        newState.comments = newState.comments.map((item) =>
          item.id === action.id
            ? {
                ...item,
                comments: [
                  ...item.comments,
                  {
                    ...action.newComment,
                    id: item.comments.length + 1,
                    date: action.dateComment,
                  },
                ],
              }
            : item
        );
      }
      return newState;
    }

    case DELETE_COMMENT: {
      return {
        ...state,
        comments: state.comments.map((item) =>
          item.id === action.id
            ? {
                ...item,
                comments: item.comments.filter(
                  (elem) => elem.id !== action.idComment
                ),
              }
            : item
        ),
      };
    }

    default:
      return state;
  }
};

export const addCommentAC = (id, newComment, dateComment) => ({
  type: ADD_COMMENT,
  id,
  newComment,
  dateComment,
});

export const deleteCommentAC = (id, idComment) => ({
  type: DELETE_COMMENT,
  id,
  idComment,
});

export default commentsReducer;
