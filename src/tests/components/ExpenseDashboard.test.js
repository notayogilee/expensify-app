import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboard from '../../components/ExpenseDashboardPage';

test('should render expense dashboard page correctly', () => {
  const wrapper = shallow(<ExpenseDashboard />);
  expect(wrapper).toMatchSnapshot();
});