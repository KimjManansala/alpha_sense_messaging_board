import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link, useParams } from "react-router-dom";

function NavbarMessagingBoard() {
    const { pageSection } = useParams();
    return (
        <Nav tabs>
            <NavItem>
                <Link to="/channel_section">
                    <NavLink active={pageSection === "channel_section"}>Channels</NavLink>
                </Link>
            </NavItem>

            <NavItem>
                <Link to="/message_section">
                    <NavLink active={pageSection === "message_section"}>Messages</NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link to="/edit_section">
                    <NavLink active={pageSection === "edit_section"}>Edit</NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <NavLink disabled href="#">TODO current Channel</NavLink>
            </NavItem>
        </Nav>
    );
}

export default NavbarMessagingBoard;