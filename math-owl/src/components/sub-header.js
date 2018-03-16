import React from 'react';
import Game from './game';
import Level from './level';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

class SubHeader extends React.Component {
    render() {
        return (
            <div>
                <Navbar fluid>
                    <Nav>
                        <NavItem>
                            <Game />
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