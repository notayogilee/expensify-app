import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    <p>filtering by keyword: {props.filters.text} </p>
    {props.expenses.map((expense) => <h3 key={expense.id}>{expense.description}</h3>)}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);

// HOC
// export default connect((state) => {
//   return {
//     expenses: state.expenses
//   };
// })(ExpenseList);