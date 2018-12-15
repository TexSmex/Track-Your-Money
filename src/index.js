import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./AppRouter";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, combineReducers } from 'redux'
// render(
//   <Provider>
//     <AppRouter />
//   </Provider>,
//   document.getElementById('root')
// )



ReactDOM.render(<AppRouter />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


//-----------------------------------------------------------------------------


let defaultExpense = {
  description: '',
  amount: 0,
  note: '',
  createdAt: 0
}
// We could defind the default values of the expense inside the fuction thanks to the destruction operator, but for more clarity I prefere to put it separated in a variable. 
const createExpense = (expense = defaultExpense) => {
  return {
    type:"CREATE_EXPENSE",
    expense
  }
}

const editExpense = (id, update) => {
  return {
    type:"EDIT_EXPENSE",
    id,
    update
  }
}

const removeExpense = (id) => {
  return {
    type:"REMOVE_EXPENSE",
    id
  }
}

const expensesReducer = (expenses = [], action) => {
  switch (action.type) {
    case "CREATE_EXPENSE":
    //we use the spread operator to not touch the state
      return [...expenses, action.expense]
    case "EDIT_EXPENSE":
      return expenses.map(expense => {
        const edits = action.update;
        if(expense.id === action.id) {
          //By spreading the edits after spreading the existent expense, the updated propreties will override the existing ones.
         return {
           ...expense,
           ...edits
         }
        } else { return expense }
        }
        )
        //The filter function does not change the state
    case "REMOVE_EXPENSE":
      return expenses.filter(({ id }) => id !== action.id)
    default:
      return expenses
  }
}
const filtersDefaultState = {
  text:'',
  sortBy: '',
  startDate: undefined,
  endDate: undefined
};


const filtersReducer = (filters = filtersDefaultState, action) => {
  switch (action.type) {
    case "FILTER_BY_TEXT":
      return {
      ...filters,
      text:action.text
      }
    default:
      return filters
  }
}

const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
}))


// To watch all the changes, I used the subscribe API directly without turning it into an Observable even if it's a low level API. For more informations : https://github.com/reduxjs/redux/issues/303#issuecomment-125184409

store.subscribe(() => console.log(store.getState()));

// The next section is only for testing purposes
store.dispatch(createExpense({description: 'Rent', amount:'500'}));

store.dispatch(createExpense({description: 'Coffee', amount:'5', note:'That coffee was expensive but delicious!'}));

store.dispatch(createExpense({description: 'Laptop', amount:'2000', id:'5'}));

store.dispatch(editExpense('5', {note:'Made an error on the price', amount:'2400'}));

store.dispatch(removeExpense('5'));

