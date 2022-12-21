import { logger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// root-reducer

// * OLD LOGIC USING REDUX
// const middleware = [logger];
// const composerEnhancer = compose(applyMiddleware(...middleware));
// export const store = createStore(rootReducer, undefined, composerEnhancer);

// * USING REDUX TOOLKIT

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const middleware = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export const persist = persistStore(store);
