import GameDetail from './game-detail';
import React from 'react';
import { shallow } from 'enzyme';


describe('GameDetail', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <GameDetail />
    );
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  });

  it('should render a game', () => {
    expect(wrapper.containsMatchingElement(
        <div>2 + 2 =</div>
       )).toBe(true);
  });
    
});