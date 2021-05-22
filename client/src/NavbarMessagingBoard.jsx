import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link, useParams } from "react-router-dom";

function NavbarMessagingBoard() {
    const { pageSection } = useParams();
    console.log(pageSection)
    return (
        <Nav tabs>
            <NavItem>
                <NavLink active={pageSection === "channel_section" || !pageSection}>
                    <Link to="/channel_section">
                        Channels
                    </Link>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink active={pageSection === "message_section"}>
                    <Link to="/message_section">
                        Messages
                    </Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink active={pageSection === "edit_section"}>
                    <Link to="/edit_section">
                    Edit
                    </Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink disabled href="#">TODO current Channel</NavLink>
            </NavItem>
        </Nav>
    );
}

export default NavbarMessagingBoard;