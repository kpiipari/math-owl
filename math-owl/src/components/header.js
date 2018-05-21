import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state;

        return (
            <div>
                <Segment inverted>
                     <Menu inverted pointing secondary size='huge' fluid widths={3}>
                        <Menu.Item as={ Link} to='/' name='mathOwl' active={activeItem === 'home'} onClick={this.handleItemClick}>
                           
                        </Menu.Item>
                        <Menu.Item as={ Link} to='/games' name='games' active={activeItem === 'games'} onClick={this.handleItemClick}>
                          
                        </Menu.Item>
                        <Menu.Item as={ Link} to='/leaderboard' name='leaderboard' active={activeItem === 'leaderboard'} onClick={this.handleItemClick}>
                            
                        </Menu.Item>
                    </Menu>
                </Segment>
            </div>
        );
    }
}

export default Header;