import React, { Component } from 'react';
import { shallow } from 'enzyme';
import GameContainer from './game-container';
import { Icon } from 'semantic-ui-react'



describe('GameContainer', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <GameContainer 
      />
    );
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
})