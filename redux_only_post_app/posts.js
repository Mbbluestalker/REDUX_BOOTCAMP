const { createStore } = require("redux");

// initial state
const initialState = {
  posts: [],
};

// actions
//action creator

//action types
const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";

//Add post
const addPostAction = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

//Remove post
const removePostAction = (id) => {
  return {
    type: REMOVE_POST,
    id,
  };
};

// reducer
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        posts: [...state.posts, action.payload],
      };
    case REMOVE_POST:
      return {
        posts: state.posts.filter((post) => {
          return post.id !== action.id;
        }),
      };
    default:
      return state;
  }

  // Just in case you want to use if statement: This commented block of code does the same things as the switch statement code above
  //   if (action.type === ADD_POST) {
  //     return {
  //         posts:[...state.posts, action.payload]
  //     }
  //   }

  //   if (action.type === REMOVE_POST) {
  //     return{
  //         posts: state.posts.filter((post) => {
  //             return post.id !== action.id
  //         })
  //     }
  //   }
  //   return state;
};

//store
const store = createStore(postReducer);

//subscribe

store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

//dispatch actions
store.dispatch(
  addPostAction({
    id: 1,
    title: "Best Course",
  })
);
store.dispatch(
  addPostAction({
    id: 2,
    title: "How to master Redux",
  })
);

store.dispatch(removePostAction(1));
