// import { createStore } from "redux";

// const INITIAL_VALUE = {
//   count: 0,
//   showButton: true,
// };

// const counterReducer = (store = INITIAL_VALUE, action) => {
//   //   console.log("Action Received", action);
//   if (action.type === "ADDITION") {
//     return {
//       count: store.count + 5,
//       showButton: store.showButton,
//     };
//   } else if (action.type === "SUBTRACTION") {
//     return {
//       count: store.count - 5,
//       showButton: store.showButton,
//     };
//   } else if (action.type === "TOGGLER_BUTTON") {
//     return {
//       count: store.count,
//       showButton: !store.showButton,
//     };
//   }
//   return store;
// };

// const counterStore = createStore(counterReducer);

// export default counterStore;

///////************************************************************************************* */

import { configureStore, createSlice, current } from "@reduxjs/toolkit";

const showButtonSlice = createSlice({
  name: "hidden",
  initialState: false,
  reducers: {
    toggler: (currState, action) => {
      return (currState = !currState);
    },
  },
});

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    addition: (currState, action) => {
      // currState.counterVal++;
      currState.counterVal = currState.counterVal + 5;
    },
    substraction: (currState, action) => {
      // console.log(currState, action);
      currState.counterVal = currState.counterVal - 5;
    },
  },
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    hide: showButtonSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const showButtonActions = showButtonSlice.actions;
export default counterStore;
