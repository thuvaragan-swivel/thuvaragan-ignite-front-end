import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// Creating a noop storage when window is not available (during server-side rendering)
const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

// Using session storage on the client side.
const storage =
  typeof window !== "undefined"
    ? createWebStorage("session")
    : createNoopStorage();

export default storage;
