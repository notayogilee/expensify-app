import React from 'react';

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h1>{description}</h1>
    <h2>$ {amount / 100}</h2>
    <h2>{createdAt}</h2>
  </div>
);

export default ExpenseListItem;