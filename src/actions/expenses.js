import uuid from 'uuid';

//create expense action :
const createExpense = (expense) => {
  return {
    type: "CREATE_EXPENSE",
    expense,
  };
};

export const createNewExpense = (expenseData = {}) => {
return (dispatch) => {
  const {
    id = uuid(),
    description = "",
    amount = 0,
    note = "",
    createdAt = 0
  } = expenseData;
  const expense = {
    id,
    description,
    amount,
    note,
    createdAt 
  }
  let expenses = JSON.parse(localStorage.getItem('expenses'));
  expenses = Array.isArray(expenses) ? expenses : [] ;
  
    localStorage.setItem('expenses', JSON.stringify([...expenses, expense]))
    dispatch(createExpense(expense));
  
}
}

//edit expense action :
const editExpense = (id, update) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    update
  };
};

export const startEditExpense = (id, update) => {
  return (dispatch) => {
    
  
    let expenses = JSON.parse(localStorage.getItem('expenses'));
    expenses.map(expense => {
      if(expense.id === id){
        return {
          ...expense,
          ...update
        };
      } else {
        return expense;
      }
    }); 
    
      localStorage.setItem('expenses', JSON.stringify(expenses))
      dispatch(editExpense(id, update));
    
  }
  }

//remove expense action :
const removeExpense = id => {
  return {
    type: "REMOVE_EXPENSE",
    id
  };
};

export const startRemoveExpense = (id) => {
  return (dispatch) => {
    
  
    let expenses = JSON.parse(localStorage.getItem('expenses'));
    expenses = expenses.filter((expense) => expense.id !== id); 
    
      localStorage.setItem('expenses', JSON.stringify(expenses))
      dispatch(removeExpense(id));
    
  }
  }

//get expenses from localstorage action :
const getExpense = getExpenses => {
  
  return {
    type: "GET_EXPENSES",
    getExpenses
  };
};

export const startGetExpense = () => {
  return (dispatch) => {

    let expenses = JSON.parse(localStorage.getItem('expenses'));
    expenses = Array.isArray(expenses) ? expenses : [] ;
    
    dispatch(getExpense(expenses));
     
    
  
  }
  }