import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseItemList = ({id, description, amount, createdAt, note}) => {

  const createdAtMoment = moment(createdAt).format("MM/DD/YYYY, h:mm:ss a");
  
  return(
  <div>
    
    <h3>{description}</h3> 
    <p>{amount} - {createdAtMoment}</p>
    <p>{note}</p>
    <button><Link to={`/edit/${id}`}>Edit</Link></button>
  </div>
  )};
 

export default ExpenseItemList;

