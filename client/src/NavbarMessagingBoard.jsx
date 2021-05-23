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
        <Nav tabs className="mt-3">
            <NavItem
                className="m-2"
                onClick={() => {handleUpdatePage('channel_section')}}
                active={!currentPage || currentPage === 'channel_section'}
            >
                Navigation
            </NavItem>

            <NavItem
                className="m-2"
                onClick={() => {handleUpdatePage('message_section')}}
                active={currentPage === 'message_section'}
            >
                Messages
            </NavItem>
            <NavItem
                className="m-2"
                onClick={() => {handleUpdatePage('edit_section')}}
                active={currentPage === 'edit_section'}
            >
                Edit
            </NavItem>
            <NavItem>
                <NavLink disabled href="#">
                    {selectedChannel.name || "Please select a channel"}
                </NavLink>
            </NavItem>
        </Nav>
    );
}

export default NavbarMessagingBoard;