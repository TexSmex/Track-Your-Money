import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseItemList = ({id, description, amount, createdAt, note}) => {

  const createdAtMoment = moment(createdAt).format("MM/DD/YYYY, h:mm:ss a");
  
  return(
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAtMoment}</p>
    <p>{note}</p>
  </div>
  )};
 

export default ExpenseItemList;

