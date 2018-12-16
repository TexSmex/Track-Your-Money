// This is the filters reducer :

//Default filters state
const filtersDefaultState = {
  text: "",
  sortBy: "Date",
  startDate: undefined,
  endDate: undefined
};


//The filter reducer:
export default (filters = filtersDefaultState, action) => {
  switch (action.type) {
    case "SET_FILTER_TEXT":
      return {
        ...filters,
        text: action.text
      };
    case "SET_START_DATE":
      return {
        ...filters,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...filters,
        endDate: action.endDate
      };
    case "SET_FILTER_SORT_BY":
      return {
        ...filters,
        sortBy: action.sortBy
      };
    default:
      return filters;
  }
};
