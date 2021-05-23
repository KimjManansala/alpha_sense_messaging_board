import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Channels from "./Channels";
import Messages from "./Messages";
import Edit from "./Edit";
import {handleGetChannels, handleGetChannelsMessage, handleSubmitNewMessage} from "./action";
import {useDispatch, useSelector} from "react-redux";
import {CardBody, CardHeader} from "reactstrap";

function MessageBoardContainer() {
    const { pageSection } = useParams();
    const dispatch = useDispatch();
    // lifecycle
    useEffect(() => {
        dispatch(handleGetChannels());
    }, [])

    return (
        <CardBody>
            <CardHeader>
                <h2>Welcome to this mock storyboard!</h2>
                <h3>Please go to the navigation tab to browse the channels!</h3>
            </CardHeader>
        </CardBody>
    );
}

export default MessageBoardContainer;