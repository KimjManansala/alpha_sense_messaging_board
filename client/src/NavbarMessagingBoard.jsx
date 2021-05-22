import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

function NavbarMessagingBoard(props) {
    return (
        <Nav tabs>
            <NavItem>
                <NavLink href="#" active>Channels</NavLink>
            </NavItem>

            <NavItem>
                <NavLink href="#">Messages</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Edit</NavLink>
            </NavItem>
            <NavItem>
                <NavLink disabled href="#">TODO current Channel</NavLink>
            </NavItem>
        </Nav>
    );
}

export default NavbarMessagingBoard;