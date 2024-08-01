"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/app/redux/store";
import ToastProvider from "@/app/components/organisms/ToastProvider";

const ClientProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastProvider>{children}</ToastProvider>
      </PersistGate>
    </Provider>
  );
};

export default ClientProvider;
