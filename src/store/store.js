import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "../store/reducers/rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["basket"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
