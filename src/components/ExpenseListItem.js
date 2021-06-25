import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`} >
      <h1>{description}</h1>
    </Link>
    <h2>$ {amount / 100}</h2>
    <h2>This was created on: {createdAt}</h2>
  </div>
);

export default ExpenseListItem;