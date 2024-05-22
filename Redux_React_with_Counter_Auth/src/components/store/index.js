import { createStore } from "redux";

const INITIAL_VALUE = {
  count: 0,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  return store;
};

const counterStore = redux.createStore(counterReducer);

export default counterStore;
