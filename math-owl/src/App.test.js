import App from './App';
import React from 'react';
import { shallow } from 'enzyme';

import Header from './components/header';
import SubHeader from './components/sub-header';
import GameDashboard from './containers/game-dashboard';

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

  it('renders sub-header', () => {
    expect(wrapper.find(SubHeader));
  });

  it('renders game', () => {
    expect(wrapper.find(GameDashboard));
  });
});