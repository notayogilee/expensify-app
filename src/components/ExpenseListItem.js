import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
  <div>
    <h1>{description}</h1>
    <h2>$ {amount / 100}</h2>
    <h2>This was created on: {createdAt}</h2>
    <button onClick={() => {
      dispatch(removeExpense({ id }));
    }}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem);