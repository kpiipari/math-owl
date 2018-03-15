import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar fluid inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home">MathOwl</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                     </Navbar.Header>
                     <Navbar.Collapse>
                        <Nav>
                            <NavItem>Games</NavItem>
                            <NavItem>Player</NavItem>
                            <NavItem>Leaderboard</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;