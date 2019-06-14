import { applyMiddleware, createStore, combineReducers } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import user from "./modules/user";
import town from "./modules/town";
import modem from "./modules/modem";

const middlewares = [thunk];

const persistConfig = {
  key: "root",
  storage
};

const reducer = persistCombineReducers(persistConfig, {
  user,
  town,
  modem
});

const configureStore = () => {
  let store = createStore(reducer, applyMiddleware(...middlewares));
  let persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
