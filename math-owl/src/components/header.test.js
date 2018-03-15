import Header from './header';
import React from 'react';
import { shallow } from 'enzyme';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Header />
    );
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  });
    
  it('should have "MathOwl" `navbar brand`', () => {
    expect(wrapper.containsMatchingElement(
      <Navbar.Brand>
        <a href="#home">MathOwl</a>
      </Navbar.Brand>))
      .toBe(true);
  });

  it('should be responsive', () => {
    expect(wrapper.containsMatchingElement(
      <Navbar.Toggle />))
      .toBe(true);
  });

  it('should have "Games" `navitem`', () => {
    expect(wrapper.containsMatchingElement(
        <NavItem>Games</NavItem>
       )).toBe(true);
  });

  it('should have "Leaderboard" `navitem`', () => {
    expect(wrapper.containsMatchingElement(
        <NavItem>Leaderboard</NavItem>
       )).toBe(true);
  });

  it('should have "Player" `navitem`', () => {
    expect(wrapper.containsMatchingElement(
        <NavItem>Player</NavItem>
       )).toBe(true);
  });

});