//create expense action :

export const createExpense = ({
  id = undefined,
  description = "",
  amount = 0,
  note = "",
  createdAt = 0
} = {}) => {
  return {
    type: "CREATE_EXPENSE",
    id,
    description,
    amount,
    note,
    createdAt
  };
};

//edit expense action :

export const editExpense = (id, update) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    update
  };
};

//remove expense action :

export const removeExpense = id => {
  return {
    type: "REMOVE_EXPENSE",
    id
  };
};
