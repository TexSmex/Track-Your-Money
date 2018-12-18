import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from '../../components/ExpenseForm'
import { createNewExpense  } from '../../actions/expenses'
import './CreateExpensePage.css'
const CreateExpensePage = (props) => (
  <div className='createExpContainer'>
     <h1 className='createExp'>Create an Expense</h1>
    <ExpenseForm  onSubmit={(expense) => {
        props.dispatch(createNewExpense(expense));
        props.history.push('/');
      }} />
    </div>
  );



 
  
  export default connect()(CreateExpensePage);
