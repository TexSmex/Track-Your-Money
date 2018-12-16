import React from "react";
import { render } from "react-dom";
import "./index.css";
import AppRouter from "./AppRouter";
import * as serviceWorker from "./serviceWorker";
import configureStore from './store/configureStore'
import { Provider } from "react-redux";

//---------------------------------------------------------------------------------------
import { createExpense, editExpense } from './actions/expenses'

const store = configureStore();


store.dispatch(createExpense({ description: "Rent", amount: "500",  createdAt: 1500 }));

store.dispatch(
  createExpense({
    description: "Coffee",
    amount: "5",
    note: "That coffee was expensive but delicious!"
  })
);

store.dispatch(
  createExpense({ description: "Laptop", amount: "2000", id: "5" })
);

store.dispatch(
  editExpense("5", { note: "Made an error on the price", amount: 2400 })
);

//-----------------------------------------------------------------------------------




console.log(store.getState())

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
)

//ReactDOM.render(<AppRouter />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

//-----------------------------------------------------------------------------

// let defaultExpense = {
//   description: "",
//   amount: 0,
//   note: "",
//   createdAt: 0
// };
// We could defind the default values of the expense inside the fuction thanks to the destruction operator, but for more clarity I prefere to put it separated in a variable.











// To watch all the changes, I used the subscribe API directly without turning it into an Observable even if it's a low level API. For more informations : https://github.com/reduxjs/redux/issues/303#issuecomment-125184409


// store.subscribe(() => {
//   const state = store.getState();
  
//   console.log(getVisibleExpenses(state.expenses, state.filters));
 
// });

// // The next section is only for testing purposes


// //store.dispatch(setFilterText("error"))

// // store.dispatch(removeExpense("5"));

// // store.dispatch(setFilterText("Rent"));

// //store.dispatch(setFilterText("COFFee"));

// // store.dispatch(setFilterStartDate(1000));

// // store.dispatch(setFilterEndDate(2000));

// //store.dispatch(setFilterSortBy("DAte"));

// store.dispatch(setFilterSortBy("Amount"));
