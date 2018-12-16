import React from 'react'

const ExpenseItemList = ({description, amount, createdAt, note}) => (

  <div>
    <h2>{description}</h2>
    <h3>${amount}-{createdAt}</h3>
    <h4>{note}</h4>
  </div>

)

export default ExpenseItemList;