import GameSelection from './game-selection';
import React from 'react';
import { shallow } from 'enzyme';
import { Icon, Header } from 'semantic-ui-react'


describe('GameStart', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <GameSelection />
    );
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  });

  it('should tell the player to select a game', () => {
    expect(wrapper.containsMatchingElement(
        <Header>Choose Game</Header>
       )).toBe(true);
  });

  it('should show "add" game icon', () => {
    expect(wrapper.containsMatchingElement(
        <Icon name='plus'/>
       )).toBe(true);
  });

  it('should show "substract" game icon', () => {
    expect(wrapper.containsMatchingElement(
        <Icon name='minus'/>
       )).toBe(true);
  });

  it('should show "multiply" game icon', () => {
    expect(wrapper.containsMatchingElement(
      <Icon name='asterisk' />
       )).toBe(true);
  });
  
});