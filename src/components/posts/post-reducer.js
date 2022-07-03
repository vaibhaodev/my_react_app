export function postReducer(
  state = {
    allLoaded: false,
    loading: false,
    posts: [],
    jsonNumber: 1,
  },
  action
) {
  switch (action.type) {
    case "ADD_POSTS":
      return {
        ...state,
        jsonNumber: parseInt(state.jsonNumber) + 1,
        posts: [...state.posts, ...action.posts],
        allLoaded: action.posts.length < 10,
        loading: false,
      };
    case "LOADING_POSTS":
      return {...state, loading: true};
    case "RESET_ALL_LOADED":
      return {...state, allLoaded: false};
    case "RESET_POSTS":
      return {...state, posts: []};
    default:
      return state;
  }
}
