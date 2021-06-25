import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE
} from '../../constants/expenseConstants';

test('should set default state', () => {
  const action = { type: '@@INIT' };
  const state = expensesReducer(undefined, action);
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = { type: REMOVE_EXPENSE, id: expenses[1].id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = { type: REMOVE_EXPENSE, id: -1 };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Laptop',
    note: '',
    createdAt: 20000,
    amount: 30000
  }
  const action = { type: ADD_EXPENSE, expense };
  const state = expensesReducer(expenses, action);
  expect(state.length).toBe(4);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense by id', () => {
  const action = { type: EDIT_EXPENSE, id: expenses[0].id, updates: { note: 'Cherry flavour' } }
  const state = expensesReducer(expenses, action);
  expect(state[0].note).toBe('Cherry flavour');
});

test('should not edit an expense if not found', () => {
  const action = { type: EDIT_EXPENSE, id: -1, updates: { note: 'Cherry flavour' } }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});