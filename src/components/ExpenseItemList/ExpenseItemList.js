import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { startRemoveExpense } from '../../actions/expenses';
import './ExpenseItemList.css'
const ExpenseItemList = (props) => {
 const createdAtMoment = moment(props.expense.createdAt).format('MMMM Do YYYY h:mm:ss a');
 
  return(
  <div>
    
    <h3 className='description'>{props.expense.description}</h3> 
    <p><span className='amount'>${props.expense.amount} </span>- <span className='createdAt'>{createdAtMoment}</span></p>
    {props.expense.note && <p className='note'><span className='spanNote'>Note:</span> {props.expense.note}</p>}
    <div className='buttonsContainer'>
    <button className='expenseListButtons edit'><Link className='Link' to={`/Track-Your-Money/edit/${props.expense.id}`}>Edit</Link></button>
    <button className='expenseListButtons remove' onClick={() => {
        props.dispatch(startRemoveExpense(props.expense.id));
      }}>Remove</button>
  </div>
  </div>
  )};
 

  export default connect()(ExpenseItemList);


