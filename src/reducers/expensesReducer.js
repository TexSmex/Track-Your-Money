//This is the expenses reducer :

export default (expenses = [], action) => {
  switch (action.type) {
    case "CREATE_EXPENSE":
      
      //we use the spread operator to not touch the state
      return [...expenses, action.expense];
    case "EDIT_EXPENSE":
      return expenses.map(expense => {
        const edits = action.update;
        if (expense.id === action.id) {
          //By spreading the edits after spreading the existent expense, the updated propreties will override the existing ones.
          return {
            ...expense,
            ...edits
          };
        } else {
          return expense;
        }
      });
    //The filter function does not change the state
    case "REMOVE_EXPENSE":
      return expenses.filter(({ id }) => id !== action.id);
    case "GET_EXPENSES" :
    return action.getExpenses;
    default:
      return expenses;
  }
};
