import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />);
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'New text change'
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change', {
    target: { value: 'date' }
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  wrapper.find('select').simulate('change', {
    target: { value: 'amount' }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
  const newStartDate = moment(0).add(4, 'years')
  const newEndDate = moment(0).add(6, 'years');
  wrapper.find(DateRangePicker).prop('onDatesChange')({
    startDate: newStartDate,
    endDate: newEndDate
  });
  expect(setEndDate).toHaveBeenLastCalledWith(newEndDate);
  expect(setStartDate).toHaveBeenLastCalledWith(newStartDate);
});

test('should handle date focus changes', () => {
  const calenderFocused = 'endDate';
  wrapper.find(DateRangePicker).prop('onFocusChange')(calenderFocused)
  expect(wrapper.state('calenderFocused')).toBe(calenderFocused)
});