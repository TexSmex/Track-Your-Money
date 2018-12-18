import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import { setFilterText, setFilterSortBy, setFilterStartDate, setFilterEndDate } from '../../actions/filters'
import './ExpensesFilters.css';
const ExpensesFilters = (props) => {

 
  

return (
  <div className='filtersContainer'>
    <div className='miniContainer'>
      <div>
        <input 
        type='text'
        placeholder='Search an expense' 
        value={props.filters.text} 
        onChange={(e) => props.handleTextFiler(e.target.value)}
        />🔍
    </div>
    <select value={props.filters.sortBy} onChange={(e) => props.handleSorting(e.target.value)}>
    <option value="Amount">Amount</option>
    <option value="Date">Date</option>
    </select>
    </div>
    <div className='miniContainer'> 
      <input 
      type="date" 
      value={props.startDateToFormat} 
      onChange={(e) => props.handleStartDate(e.target.value)}/>
    <input type="date" value={props.endDateToFormat} onChange={(e) => props.handleEndDate(e.target.value)}/>
    </div>
  </div>
)}


const mapStateToProps = state => ({ 
  expenses: state.expenses,
  filters:state.filters,
  startDateToFormat: moment(state.filters.startDate).format('YYYY-MM-DD'),
  endDateToFormat: moment(state.filters.endDate).format('YYYY-MM-DD')
 })


const mapDispatchToProps = dispatch => {
  return {
    handleTextFiler: value => {
      dispatch(setFilterText(value))
    },

    handleSorting: value=>  {
      dispatch(setFilterSortBy(value))
    },

    handleStartDate: value=>  {
      const startDateToUnix = moment(value).valueOf();
      dispatch(setFilterStartDate(startDateToUnix))
    },

    handleEndDate: value=>  {
      const endDateToUnix = moment(value).valueOf();
      dispatch(setFilterEndDate(endDateToUnix))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ExpensesFilters);