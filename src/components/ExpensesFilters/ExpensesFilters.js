import React from 'react';
import {connect} from 'react-redux'
import { setFilterText, setFilterSortBy } from '../../actions/filters'

const ExpensesFilters = (props) => (
  <div>
    <input type='text' value={props.filters.text} onChange={(e) => props.handleTextFiler(e.target.value)}/>
    <select value={props.filters.sortBy} onChange={(e) => props.handleSorting(e.target.value)}>
    <option value="Amount">Amount</option>
    <option value="Date">Date</option>
    </select>
  </div>
)


const mapStateToProps = state => ({ 
  expenses: state.expenses,
  filters:state.filters
 })


const mapDispatchToProps = dispatch => {
  return {
    handleTextFiler: value => {
      dispatch(setFilterText(value))
    },

    handleSorting: value=>  {
      dispatch(setFilterSortBy(value))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ExpensesFilters);