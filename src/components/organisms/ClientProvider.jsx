"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import PropTypes from "prop-types";
import { store, persistor } from "../../redux/store.js";
import ToastProvider from "../organisms/ToastProvider.jsx";

// ClientProvider component that wraps children with Redux Provider, PersistGate, and ToastProvider.
const ClientProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastProvider>{children}</ToastProvider>
      </PersistGate>
    </Provider>
  );
};

// Defining PropTypes for the ClientProvider component.
ClientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ClientProvider;
