import React from 'react';
import { connect } from 'react-redux'
import CreateExpenseForm from '../../components/CreateExpenseForm'
import { createExpense  } from '../../actions/expenses'

const CreateExpensePage = (props) => (
  <div>
     <h1>Create an Expense</h1>
    <CreateExpenseForm  onSubmit={(expense) => {
        props.dispatch(createExpense(expense));
        props.history.push('/');
      }} />
    </div>
  );



 
  
  export default connect()(CreateExpensePage);
