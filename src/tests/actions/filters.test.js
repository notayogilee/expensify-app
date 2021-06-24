import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from "../../actions/filters";
import {
  SET_TEXT_FILTER,
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
  SET_START_DATE,
  SET_END_DATE
} from '../../constants/filterConstants';
import moment from 'moment';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: SET_START_DATE,
    startDate: moment(0)
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: SET_END_DATE,
    endDate: moment(0)
  });
});

test('should generate set text filter with text value', () => {
  const text = 'some bill'
  const action = setTextFilter(text);

  expect(action).toEqual({
    type: SET_TEXT_FILTER,
    text: text
  });
});

test('should generate set text filter object with default', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: SET_TEXT_FILTER,
    text: ''
  });
});

test('should generate action object for sort by amount', () => {
  expect(sortByAmount()).toEqual({ type: SORT_BY_AMOUNT });
});

test('should generate action object for sort by date', () => {
  expect(sortByDate()).toEqual({ type: SORT_BY_DATE });
});