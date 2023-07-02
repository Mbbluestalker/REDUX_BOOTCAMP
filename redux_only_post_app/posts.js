const { createStore, combineReducers } = require("redux");

// initial state
const initialState = {
  posts: [],
};

const usersInitialState = {
  users: [],
};

// actions
//action creator

//action types
const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";
const ADD_USER = "ADD_USER";

//Add post
const addPostAction = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

//Add User
const addUserAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

//Remove post
const removePostAction = (id) => {
  return {
    type: REMOVE_POST,
    id,
  };
};

// post reducer
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

// user reducer
const userReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};


//root reducer
const rootReducer = combineReducers({
    posts: postReducer,
    users: userReducer
})
//store
const store = createStore(rootReducer);

//subscribe

store.subscribe(() => {
  const data = store.getState();
  console.log(data.posts);
  console.log(data.users);
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
store.dispatch(addUserAction({
    name: "olawole",
    email: "olawole@gmail.com"
}));
