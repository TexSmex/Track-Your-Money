//Function that will filters expenses :

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || startDate <= expense.createdAt;
      const endDateMatch =
        typeof endDate !== "number" || endDate >= expense.createdAt;
      const textMatch =
        expense.description.toLowerCase().includes(text.toLowerCase()) ||
        expense.note.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) =>
      sortBy.toLowerCase() === "date"
        ? -(parseInt(a.createdAt) - parseInt(b.createdAt))
        : -(parseFloat(a.amount) - parseFloat(b.amount))
    );
};
