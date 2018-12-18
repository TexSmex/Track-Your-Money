import React, { Component } from 'react'
import './ExpenseForm.css'
export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description : props.expense ? props.expense.description : '',
      amount: props.expense ? props.expense.amount :'',
      note: props.expense ? props.expense.note :'',
      createdAt: props.expense ? props.expense.createdAt : Date.now(), 
      error:''
      }
  }

  

    onDescriptionChange = (e) => {
      const description = e.target.value;
      this.setState(() => ({ description }));
    }
    onAmountChange = (e) => {
      const amount = e.target.value;
      if(!amount || amount.match(/^\d+\.?\d{0,2}$/)){
        this.setState(() => ({ amount }));
      }
      
    }
    onNoteChange = (e) => {
      const note = e.target.value;
      this.setState(() => ({ note }));
    }

    onSubmit = (e) => {
      e.preventDefault();

      if (this.state.description && this.state.amount) {
        this.setState(() => ({ error: '' }));
        this.props.onSubmit({
          description: this.state.description,
          amount: this.state.amount,
          createdAt: this.state.createdAt ,
          note: this.state.note
        });
      } else {
        const error = "Please enter the Description and the Amount!"
        this.setState(() => ({ error }));
      }
    }

  render() {
    
    return (
      <div  >
      {this.state.error && <p>{this.state.error}</p>}
         <form onSubmit={this.onSubmit} className='formContainer'>
          <input className='formInput'
          type="text"
          placeholder="Enter a Description" 
          value={this.state.description} 
          onChange={this.onDescriptionChange} 
          />
          <input className='formInput'
          type="text" 
          placeholder="Enter an Amount"
          value={this.state.amount} 
          onChange={this.onAmountChange} 
          />
          <textarea className='formTextArea'
          placeholder="Add a note for your expense (optional)"
          value={this.state.note} 
          onChange={this.onNoteChange} 
          />
        <button className='formButton'>{this.props.expense ? 'Edit Expense' : 'Create New Expense' }</button>
        
      </form>
      </div>
    )
  }
}