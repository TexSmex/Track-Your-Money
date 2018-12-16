//Set the text field in the filters state

export const setFilterText = text => {
  return {
    type: "SET_FILTER_TEXT",
    text
  };
};

//Set the startDate field in the filters state

export const setFilterStartDate = startDate => {
  return {
    type: "SET_START_DATE",
    startDate
  };
};

//Set the endDate field in the filters state

export const setFilterEndDate = endDate => {
  return {
    type: "SET_END_DATE",
    endDate
  };
};

//Set the sortBy field in the filters state

export const setFilterSortBy = sortBy => {
  return {
    type: "SET_FILTER_SORT_BY",
    sortBy
  };
};
