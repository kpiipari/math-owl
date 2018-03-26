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
                            <GameType game="Addition"/>
                        </NavItem>
                        <NavItem>
                            <Level level="1"/>
                        </NavItem>
                    </Nav>
                </Navbar>
            );
        } else {
            return (
                <Navbar fluid>
                    <Nav>
                        <NavItem>
                            <Message message="Welcome to MathOwl"/>
                        </NavItem>
                    </Nav>
                </Navbar>
            );
        }
    }
}

export default SubHeader;