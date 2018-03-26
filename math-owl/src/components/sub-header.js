import React from 'react';
import GameType from './game-type';
import Level from './level';
import Message from './message';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

class SubHeader extends React.Component {
    state = {
        gameMode: false,
    };

    render() {
        if (this.state.gameMode) {
            return (
                <Navbar fluid>
                    <Nav>
                        <NavItem>
                            <GameType game={this.props.game}/>
                        </NavItem>
                        <NavItem>
                            <Level level={this.props.level}/>
                        </NavItem>
                    </Nav>
                </Navbar>
            );
        } else {
            return (
                <Navbar fluid>
                    <Nav>
                        <NavItem>
                            <Message message="Welcome to Math Owl"/>
                        </NavItem>
                    </Nav>
                </Navbar>
            );
        }
    }
}

export default SubHeader;