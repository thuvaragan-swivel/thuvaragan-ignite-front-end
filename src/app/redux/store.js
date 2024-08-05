import { configureStore, combineReducers } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "./storage";

const rootReducer = combineReducers({
  employee: employeeReducer,
});

const persistConfig = {
  key: "root", // Key for persisted state.
  storage, // Custom storage (session storage).
};

// Creating a persisted reducer.
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
