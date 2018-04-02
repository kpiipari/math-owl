import SubHeader from './sub-header';
import GameType from './game-type';
import Level from './level';
import React from 'react';
import Message from './message';
import { shallow } from 'enzyme';
import { Header, Grid, Segment } from 'semantic-ui-react';



describe('SubHeader', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <SubHeader 
      />
    );
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
    
  it('should render GameType component', () => {
    expect(expect(wrapper.find(GameType)));
  });

  it('should render Level component', () => {
    expect(expect(wrapper.find(Level)));
  });

  it('should render Message component', () => {
    expect(expect(wrapper.find(Message)));
  });
})