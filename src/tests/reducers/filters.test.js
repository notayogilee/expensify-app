import filtersReducer from "../../reducers/filters";
import {
  SET_TEXT_FILTER,
  SET_START_DATE,
  SET_END_DATE,
  SORT_BY_AMOUNT,
  SORT_BY_DATE
} from '../../constants/filterConstants';
import moment from 'moment';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: SORT_BY_AMOUNT });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: SORT_BY_DATE };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const text = 'some text';
  const action = { type: SET_TEXT_FILTER, text };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
  const startDate = moment(0).add(1, 'days');
  const action = {
    type: SET_START_DATE,
    startDate
  }
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(moment(0).add(1, 'days'));
});

test('should set endDate filter', () => {
  const endDate = moment(0).add(1, 'days');
  const action = {
    type: SET_END_DATE, 
    endDate
  }
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(moment(0).add(1, 'days'));
});