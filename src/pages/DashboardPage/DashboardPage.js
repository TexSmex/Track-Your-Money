import React from 'react';
import ExpenseItemList from '../../components/ExpenseItemList'
import ExpensesFilters from '../../components/ExpensesFilters'
import getVisibleExpenses from  '../../selectors/expenseSelectors'
import { connect } from 'react-redux'



const DashboardPage = (props) => (

  <div>
  <div>
  <ExpensesFilters/>
  </div>
  {props.expenses.map(expense => <ExpenseItemList key={expense.id} {...expense} />)}
  </div>
);

  const mapStateToProps = state => ({ expenses: getVisibleExpenses(state.expenses,state.filters)})
  

  export default connect(mapStateToProps)(DashboardPage)
  
 