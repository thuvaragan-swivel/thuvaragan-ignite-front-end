// src/app/components/ClientProviders.js
"use client";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/app/redux/store';
import ToastProvider from './ToastProvider.jsx';

const ClientProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastProvider>{children}</ToastProvider>
      </PersistGate>
    </Provider>
  );
};

export default ClientProviders;
