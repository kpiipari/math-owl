import SubHeader from './sub-header';
import Game from './game';
import Level from './level';
import React from 'react';
import { shallow } from 'enzyme';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


describe('SubHeader', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SubHeader />
    );
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  });
    
  it('should render Game component as a `navitem`', () => {
    expect(wrapper.containsMatchingElement(
        <NavItem>
            <Game />
        </NavItem>
       )).toBe(true);
  });

  it('should render Level  as a `navitem`', () => {
    expect(wrapper.containsMatchingElement(
        <NavItem>
            <Level />
        </NavItem>
       )).toBe(true);
  });

});