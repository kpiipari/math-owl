import Game from './game';
import React from 'react';
import { shallow } from 'enzyme';


describe('Game', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Game />
    );
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  });
    
});