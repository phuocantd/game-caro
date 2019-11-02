import { createStore, compose, applyMiddleware } from "redux";
// import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { createPromise } from 'redux-promise-middleware'

import reducers from "./reducers";

const middleware = applyMiddleware(createPromise(), thunk)// , createLogger())
const store = createStore(
    reducers,
    compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
);

export default store