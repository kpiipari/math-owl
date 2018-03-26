import GameSelection from './game-selection';
import React from 'react';
import { shallow } from 'enzyme';


describe('GameStart', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <GameStart />
    );
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  });

  it('should tell the player to select a game', () => {
    expect(wrapper.containsMatchingElement(
        <h2>Select a Game to play</h2>
       )).toBe(true);
  });

  it('should show "addition" game button', () => {
    expect(wrapper.containsMatchingElement(
        <button>Addition</button>
       )).toBe(true);
  });

  it('should show "substraction" game button', () => {
    expect(wrapper.containsMatchingElement(
        <button>Substraction</button>
       )).toBe(true);
  });

  it('should show "multiplication" game button', () => {
    expect(wrapper.containsMatchingElement(
        <button>Multiplication</button>
       )).toBe(true);
  });

  it('should show "division" game button', () => {
    expect(wrapper.containsMatchingElement(
        <button>Division</button>
       )).toBe(true);
  });
    
});