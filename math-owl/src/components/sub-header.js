import React from 'react';
import GameType from './game-type';
import Level from './level';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

class SubHeader extends React.Component {
    render() {
        return (
            <div>
                <Navbar fluid>
                    <Nav>
                        <NavItem>
                            <GameType />
                        </NavItem>
                        <NavItem>
                            <Level />
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default SubHeader;