import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

  console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: 'water bill', amount: 5000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 100000 }));

store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));

ReactDOM.render(<AppRouter />, document.getElementById('app'));
