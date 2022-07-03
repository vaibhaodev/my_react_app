import {createStore, applyMiddleware, compose} from "redux";
import {postReducer} from "./post-reducer";
// import {composeWithDevTools} from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

// let enhancers = applyMiddleware(ReduxThunk);

// const composedEnhancers = composeWithDevTools(enhancers);

// const store = createStore(postReducer, compose(applyMiddleware(ReduxThunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
const store = createStore(postReducer, compose(applyMiddleware(ReduxThunk)));

// const store = createStore(postReducer, {data: [], isFetching: false}, composedEnhancers);
export default store;
