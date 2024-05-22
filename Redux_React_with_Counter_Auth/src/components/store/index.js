import { createStore } from "redux";

const INITIAL_VALUE = {
  count: 0,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  //   console.log("Action Received", action);
  if (action.type === "ADDITION") {
    return { count: store.count + 5 };
  } else if (action.type === "SUBTRACTION") {
    return { count: store.count - 5 };
  }
  return store;
};

const counterStore = createStore(counterReducer);

export default counterStore;
