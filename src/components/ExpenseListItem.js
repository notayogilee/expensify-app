import React from 'react';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
  <div>
    <Link to={`/edit/${id}`} >
      <h1>{description}</h1>
    </Link>
    <h2>$ {amount / 100}</h2>
    <h2>This was created on: {createdAt}</h2>

  </div>
);

export default ExpenseListItem;