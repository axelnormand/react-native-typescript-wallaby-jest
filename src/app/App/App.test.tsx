import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

test('App renders', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
