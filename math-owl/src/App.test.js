import App from './App';
import React from 'react';
import { shallow } from 'enzyme';

import Header from './components/header';

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });
  
  it('should exist', () => {
    expect(wrapper).toBeDefined()
  });

  it('renders header', () => {
    expect(wrapper.find(Header));
  });
});