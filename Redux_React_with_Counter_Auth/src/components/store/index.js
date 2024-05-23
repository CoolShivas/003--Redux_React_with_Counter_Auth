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

import { configureStore } from "@reduxjs/toolkit";

const counterStore = configureStore({});

export default counterStore;
