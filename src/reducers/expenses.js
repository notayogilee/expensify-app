import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE
} from '../constants/constants';

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [
        ...state,
        action.expense
      ];
    case REMOVE_EXPENSE:
      return state.filter(({ id }) => id !== action.id);
    case EDIT_EXPENSE:
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      })
    default:
      return state;
  }
};