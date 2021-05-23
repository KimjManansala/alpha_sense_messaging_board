import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Link, useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {handleUpdateCurrentPage} from "./views/MessageBoard/action";

function NavbarMessagingBoard() {
    const { pageSection } = useParams();
    const history = useHistory();
    const dispatch = useDispatch()
    const { currentPage } = useSelector(state => state.common);
    const { selectedChannel } = useSelector(state => state.messageBoard);
    const handleUpdatePage = (route) => {
        dispatch(handleUpdateCurrentPage((route)))
        history.push(`/${route}`);

    }

    return (
        <Nav tabs className="mt-3 border-bottom-0">
            <NavItem
                className="m-2"
                onClick={() => {handleUpdatePage('channel_section')}}
            >
                <NavLink active={currentPage === 'channel_section'}>
                    Navigation
                </NavLink>
            </NavItem>

            <NavItem
                className="m-2"
                onClick={() => {handleUpdatePage('message_section')}}
            >
                <NavLink active={currentPage === 'message_section'}>
                    Messages
                </NavLink>
            </NavItem>
            <NavItem
                className="m-2"
                onClick={() => {handleUpdatePage('edit_section')}}
            >
                <NavLink active={currentPage === 'edit_section'}>
                    Edit
                </NavLink>
            </NavItem>
            <NavItem className="m-2">
                <NavLink disabled href="#">
                    {selectedChannel.name || "Please select a channel"}
                </NavLink>
            </NavItem>
        </Nav>
    );
}

export default NavbarMessagingBoard;