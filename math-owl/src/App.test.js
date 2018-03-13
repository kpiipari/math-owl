import App from './App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should exist', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeDefined()
  });
  
  it('should have the `title` "Welcome to React"', () => {
    const wrapper = shallow(
      <App />
    );
    expect(
      wrapper.containsMatchingElement(<h1>Welcome to React</h1>)
    ).toBe(true);
  });
});