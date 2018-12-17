import React from "react";
import { render } from "react-dom";
import "./index.css";
import AppRouter from "./AppRouter";
import * as serviceWorker from "./serviceWorker";
import configureStore from './store/configureStore'
import { Provider } from "react-redux";

//---------------------------------------------------------------------------------------
import { startGetExpense } from './actions/expenses'

const store = configureStore();

store.dispatch(startGetExpense());

store.subscribe( ()=> {console.log(store.getState())})

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

