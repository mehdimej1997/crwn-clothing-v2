import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// root-reducer

const middleware = [logger];

const composerEnhancer = compose(applyMiddleware(...middleware));

export const store = createStore(rootReducer, undefined, composerEnhancer);